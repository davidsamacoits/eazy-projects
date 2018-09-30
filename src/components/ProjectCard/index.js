// ./components/ProjectCard/index.js

import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './styles';

import { COLOR_PRIMARY } from '../../styles/common';

import { CURRENCIES } from '../../constants';

const ProjectCard = props => {
  const {
    imageSource,
    projectName,
    amountSaved,
    submitCallback,
  } = props;

  // Formating for CAD currency
  const numberFormat = new Intl.NumberFormat(CURRENCIES.CAD.locale, {
    style: 'currency',
    currency: CURRENCIES.CAD.code,
    maximumFractionDigits: 2,
  });
  const amount = numberFormat.format(amountSaved);

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
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.projectName}
        >
          {projectName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.amountSaved}
        >
          {amount}
        </Text>
      </ImageBackground>
    </ImageBackground>
    <TouchableOpacity
      onPress={() => submitCallback(100)}
      color={COLOR_PRIMARY}
      style={styles.addMoneyButton}
    >
      <Text>Add money to this project</Text>
    </TouchableOpacity>
  </View>
  );
};

export default ProjectCard;