// ./App.js

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

import Home from './pages/Home';
import ProjectModal from './modals/ProjectModal';
import AddMoneyModal from './modals/AddMoneyModal';

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

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}