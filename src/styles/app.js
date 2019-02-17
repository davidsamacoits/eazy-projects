// ./styles/app.js

import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  COLOR_BACKGROUND,
  COLOR_OVERLAY,
  COLOR_WHITE,
  TEXT_SHADOW_COLOR_LIGHT,
  TEXT_SHADOW_RADIUS,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_HEIGHT,
} from './common';
import {
  CARD_HEIGHT_GUTTER,
  CARD_BUTTONS_HEIGHT,
  CARD_HEIGHT_GAP,
  CARD_SAFE_BOTTOM_MARGIN,
} from '../components/ProjectCard/constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    flexDirection: 'column',
  },
  containerOverlay: {
    backgroundColor: COLOR_OVERLAY,
    flexDirection: 'column',
  },
  backgroundImages: {
    position: 'absolute',
    height: height,
    width: width,
  },
  paginationDotContainer: {
    height: (CARD_HEIGHT_GUTTER/2)-(CARD_BUTTONS_HEIGHT/2)-CARD_HEIGHT_GAP-CARD_SAFE_BOTTOM_MARGIN,
    marginBottom: CARD_SAFE_BOTTOM_MARGIN,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -3,
    backgroundColor: COLOR_WHITE,
    shadowColor: TEXT_SHADOW_COLOR_LIGHT,
    shadowRadius: TEXT_SHADOW_RADIUS,
    shadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
    overflow: 'visible',
  },
  addProjectButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: getStatusBarHeight()-5,
    marginRight: 18,
    height: (CARD_HEIGHT_GUTTER/2)-(CARD_BUTTONS_HEIGHT/2)+CARD_HEIGHT_GAP,
  },
  addProjectButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addProjectText: {
    color: COLOR_WHITE,
    fontSize: 16,
    fontWeight: '500',
    marginTop: -2,
    textShadowColor: TEXT_SHADOW_COLOR_LIGHT,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
    opacity: 0.9,
    padding: 4,
  },
  addProjectIcon: {
    color: COLOR_WHITE,
    textShadowColor: TEXT_SHADOW_COLOR_LIGHT,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
    overflow: 'visible',
    padding: 6,
  },
});