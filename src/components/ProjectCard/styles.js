// ./components/ProjectCard/styles.js

import { StyleSheet, Dimensions } from 'react-native';

import {
  SHADOW_COLOR,
  SHADOW_HEIGHT,
  SHADOW_WIDTH,
  SHADOW_RADIUS,
  SHADOW_OPACITY,
  COLOR_WHITE,
  TEXT_SHADOW_COLOR,
  TEXT_SHADOW_HEIGHT,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_RADIUS,
  TEXT_SHADOW_OPACITY,
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
  buttonsContainer: {
    
  },
  addMoneyButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectName: {
    color: COLOR_WHITE,
    fontWeight: "700",
    fontSize: 20,
    padding: 20,
    paddingBottom: 0,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
  amountSaved: {
    color: COLOR_WHITE,
    fontWeight: "200",
    fontSize: 45,
    padding: 20,
    paddingTop: 0,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  }
});