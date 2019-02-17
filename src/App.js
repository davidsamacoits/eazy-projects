// ./App.js

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { fadeIn } from 'react-navigation-transitions';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Home from './pages/Home';
import ProjectModal from './modals/ProjectModal';
import AddMoneyModal from './modals/AddMoneyModal';

import reducers from './globalRedux/reducers';
import sagas from './globalRedux/sagas';

// Actions to execute when the application is loading
import { requestProjects } from './services/projectsService/actions';

import { MODAL_BACKGROUND_COLOR } from './styles/common';

const MainNavigator = StackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AppNavigator = StackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    ProjectModal: {
      screen: ProjectModal,
    },
    AddMoneyModal: {
      screen: AddMoneyModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    cardStyle: {
      backgroundColor: MODAL_BACKGROUND_COLOR,
    },
    transitionConfig: () => fadeIn(),
  }
);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mMunt it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

// Request projects
store.dispatch(requestProjects());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}