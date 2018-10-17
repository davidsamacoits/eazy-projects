// ./styles/app.js

import { StyleSheet } from 'react-native';

import {
  COLOR_BACKGROUND,
  COLOR_OVERLAY,
  COLOR_WHITE,
  TEXT_SHADOW_COLOR_LIGHT,
  TEXT_SHADOW_RADIUS,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_HEIGHT,
} from './common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    flexDirection: 'column',
  },
  containerOverlay: {
    backgroundColor: COLOR_OVERLAY,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  addProjectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    marginTop: 10,
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