import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as workers from './workers';

export default function* rootSaga() {
  yield takeLatest(actionTypes.PROJECTS_REQUEST, workers.watchRequestProjects);
  yield takeLatest(actionTypes.PROJECTS_REQUEST_SUCCESS, workers.watchRequestProjectsSuccess);
  yield takeLatest(actionTypes.PROJECT_ADD_MONEY_REQUEST, workers.watchAddMoneyRequest);
}