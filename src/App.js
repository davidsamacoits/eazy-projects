// ./App.js

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Project from './pages/Project';

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Project: { screen: Project },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}