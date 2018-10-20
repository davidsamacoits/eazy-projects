// ./components/ProjectCard/index.js

import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import styles from './styles';

import { imagesAssets } from '../../helpers/images';

import { BLUR_RADIUS_OVERLAY } from '../../styles/common';

export default class CarouselBackground extends Component {
  render() {
    const currentBackground = this.props.currentBackground;
    return(
      <View style={styles.backgroundsContainer}>
        <Image
          source={imagesAssets[currentBackground]}
          blurRadius={BLUR_RADIUS_OVERLAY}
          style={styles.backgroundImages}
          resizeMode="cover"
        />
      </View>
    )
  }
}