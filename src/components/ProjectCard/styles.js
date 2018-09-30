// ./components/ProjectCard/styles.js

import { StyleSheet, Dimensions } from 'react-native';

import {
  SHADOW_COLOR,
  SHADOW_HEIGHT,
  SHADOW_WIDTH,
  SHADOW_RADIUS,
  SHADOW_OPACITY,
  COLOR_WHITE,
} from '../../styles/common';

import { 
  CARD_RADIUS,
  CARD_HEIGHT_GUTTER,
  CARD_WIDTH_GUTTER
} from './constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  projectCardContainer: {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {width: SHADOW_WIDTH, height: SHADOW_HEIGHT},
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
    backgroundColor: COLOR_WHITE,
    borderRadius: CARD_RADIUS,
    overflow: "hidden",
  },
  imageCardContainer: {
    height: (height-CARD_HEIGHT_GUTTER),
    width: (width-CARD_WIDTH_GUTTER),
  },
  imageCardOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  addMoneyButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "red",
  }
});