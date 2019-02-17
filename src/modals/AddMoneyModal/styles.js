// ./modals/AddMoneyModal/styles.js

import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  MODAL_GUTTER,
  TEXT_SHADOW_COLOR,
  TEXT_SHADOW_HEIGHT,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_RADIUS,
  SHADOW_COLOR,
  SHADOW_WIDTH,
  SHADOW_HEIGHT,
  SHADOW_RADIUS,
  SHADOW_OPACITY,
} from '../../styles/common';

import { BUTTON_PADDING } from './constants';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: MODAL_GUTTER,
  },
  dismissKeyboardContainer: {
    flex: 1,
  },
  container: {
    width: '100%',
  },
  titleModal: {
    color: COLOR_WHITE,
    fontWeight: '700',
    fontSize: 30,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
  amountInput: {
    paddingVertical: 15,
    fontSize: 38,
    color: COLOR_WHITE,
    fontWeight: '300',
    marginVertical: 15,
    width: '100%',
    shadowColor: SHADOW_COLOR,
    shadowOffset: {width: SHADOW_WIDTH, height: SHADOW_HEIGHT},
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
    borderBottomWidth: 2,
    borderColor: COLOR_WHITE,
  },
  addMoneyButton: {
    backgroundColor: COLOR_WHITE,
    padding: 15,
    marginTop: 35,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMoneyText: {
    color: COLOR_BLACK,
    fontWeight: '500',
    fontSize: 18,
  },
});