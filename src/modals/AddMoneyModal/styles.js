// ./modals/AddMoneyModal/styles.js

import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  MODAL_GUTTER,
  TEXT_SHADOW_COLOR,
  TEXT_SHADOW_HEIGHT,
  TEXT_SHADOW_WIDTH,
  TEXT_SHADOW_RADIUS,
} from '../../styles/common';

export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    padding: MODAL_GUTTER,
  },
  titleModal: {
    color: COLOR_WHITE,
    fontWeight: '700',
    fontSize: 32,
    paddingBottom: 0,
    textShadowColor: TEXT_SHADOW_COLOR,
    textShadowRadius: TEXT_SHADOW_RADIUS,
    textShadowOffset: {width: TEXT_SHADOW_WIDTH, height: TEXT_SHADOW_HEIGHT},
  },
});