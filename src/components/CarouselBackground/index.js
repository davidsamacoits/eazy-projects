// ./components/ProjectCard/index.js

import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import map from 'lodash/map';

import Fade from '../Fade';

import { imagesAssets } from '../../helpers/images';

import { BLUR_RADIUS_OVERLAY } from '../../styles/common';
import styles from './styles';

import categories from '../../assets/categories';

export default class CarouselBackground extends Component {

  _renderAllBackground(currentBackground) {
    return map(categories, c => {
      const isVisible = (currentBackground === c.image) ? true : false;
      return (
        <Fade
          key={c.image}
          visible={isVisible}
          style={styles.fadeContainer}
        >
          <Image
            key={c.image}
            source={imagesAssets[c.image]}
            blurRadius={BLUR_RADIUS_OVERLAY}
            style={styles.backgroundImages}
            resizeMode="cover"
          />
        </Fade>
      )}
    );
  }

  render() {
    const currentBackground = this.props.currentBackground;
    return(
      <View style={styles.backgroundsContainer}>
        {this._renderAllBackground(currentBackground)}
      </View>
    )
  }
}