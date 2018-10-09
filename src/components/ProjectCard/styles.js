// ./components/ProjectCard/styles.js

import { StyleSheet, Dimensions } from 'react-native';

import {
  SHADOW_COLOR,
  SHADOW_HEIGHT,
  SHADOW_WIDTH,
  SHADOW_RADIUS,
  SHADOW_OPACITY,
  COLOR_WHITE,
  COLOR_GREEN,
  COLOR_RED,
  TEXT_SHADOW_COLOR,
  TEXT_SHADOW_HEIGHT,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_RADIUS,
  TEXT_SHADOW_OPACITY,
} from '../../styles/common';

import { 
  CARD_RADIUS,
  CARD_HEIGHT_GUTTER,
  CARD_WIDTH_GUTTER,
  CARD_PROGRESS_HEIGHT,
  CARD_PROGRESS_COLOR,
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
  progressContainer: {
    height: CARD_PROGRESS_HEIGHT,
  },
  progressBar: {
    height: CARD_PROGRESS_HEIGHT,
    backgroundColor: CARD_PROGRESS_COLOR,
    borderBottomLeftRadius: 0,
		borderBottomRightRadius: CARD_PROGRESS_HEIGHT,
		borderTopLeftRadius: 0,
    borderTopRightRadius: CARD_PROGRESS_HEIGHT,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  openAddMoneyButton: {
    padding: 15,
    paddingTop: 15 - CARD_PROGRESS_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  openAddMoneyText: {
    fontWeight: '400',
  },
  cancelButton: {
    backgroundColor: COLOR_RED,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cancelText: {
    color: COLOR_WHITE,
    fontWeight: '500',
  },
  addMoneyButton: {
    backgroundColor: COLOR_GREEN,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  addText: {
    color: COLOR_WHITE,
    fontWeight: '500',
  },
  projectName: {
    color: COLOR_WHITE,
    fontWeight: '700',
    fontSize: 20,
    padding: 20,
    paddingBottom: 0,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
  amountSaved: {
    color: COLOR_WHITE,
    fontWeight: '200',
    fontSize: 45,
    padding: 20,
    paddingBottom: 0,
    paddingTop: 0,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
  amountGoalContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
  },
  amountGoal: {
    color: COLOR_WHITE,
    fontWeight: '500',
    fontSize: 18,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
  amountInputContainer: {
    height: 0,
    justifyContent: 'center',
    opacity: 0,
  },
  amountInput: {
    padding: 15,
    paddingTop: 15 - CARD_PROGRESS_HEIGHT,
    fontSize: 25,
    fontWeight: '300',
  }
});