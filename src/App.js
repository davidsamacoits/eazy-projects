// ./App.js

import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';

import styles from './styles/app';
import { BLUR_RADIUS_OVERLAY } from './styles/common';

import ProjectCard from './components/ProjectCard';

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./assets/images/535818.jpg')}
        blurRadius={BLUR_RADIUS_OVERLAY}
        style={styles.container}
      >
        <View style={styles.containerOverlay}>
          <ProjectCard />
        </View>
      </ImageBackground>
    );
  }
}