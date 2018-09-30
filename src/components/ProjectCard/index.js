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

const ProjectCard = () => (
  <View style={styles.projectCardContainer}>
    <ImageBackground
      source={require('../../assets/images/535818.jpg')}
      style={styles.imageCardContainer}
      resizeMode="cover"
    >
      <Text>
        Hello
      </Text>
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

export default ProjectCard;