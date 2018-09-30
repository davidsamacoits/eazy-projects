// ./components/ProjectCard/index.js

import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import { COLOR_PRIMARY } from '../../styles/common';

const ProjectCard = props => {
  const {
    imageSource,
  } = props;
  return ( 
  <View style={styles.projectCardContainer}>
    <ImageBackground
      source={imageSource}
      style={styles.imageCardContainer}
      resizeMode="cover"
    >
      <ImageBackground
        source={require('../../assets/images/gradient.png')}
        style={styles.imageCardOverlay}
        resizeMode="stretch"
      >
        <Text style={styles.text}>
          Hello
        </Text>
      </ImageBackground>
    </ImageBackground>
    <TouchableOpacity
      onPress={()=>{}}
      color={COLOR_PRIMARY}
      style={styles.addMoneyButton}
    >
      <Text>Add money to this project</Text>
    </TouchableOpacity>
  </View>
  );
};

export default ProjectCard;