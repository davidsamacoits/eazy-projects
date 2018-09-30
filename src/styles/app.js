// ./styles/app.js

import { StyleSheet } from 'react-native';

import {
  COLOR_BACKGROUND,
  COLOR_OVERLAY,
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
    alignItems: 'center'
  }
});