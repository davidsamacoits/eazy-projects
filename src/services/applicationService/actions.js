import * as actionTypes from './actionTypes';

export function appStopLoading() {
  return {
    type: actionTypes.APP_STOP_LOADING,
  }
}

export function appStartLoading() {
  return {
    type: actionTypes.APP_START_LOADING,
  }
}