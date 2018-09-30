// ./App.js

import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar } from 'react-native';

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
        resizeMode="cover"
      >
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.containerOverlay}>
          <ProjectCard
            imageSource={require('./assets/images/535818.jpg')}
          />
        </View>
      </ImageBackground>
    );
  }
}