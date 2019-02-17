import { call, put, select } from 'redux-saga/effects';

import {
  requestProjectsSuccess,
  requestProjectsFailure,
  addMoneyToProjectCompleted,
} from './actions';

import {
  appStopLoading,
} from '../applicationService/actions';

import { retrieveProjects, storeProjects } from '../../helpers/storage';

export function* watchRequestProjects() {
  const projects = yield call(retrieveProjects);
  if (projects) {
    yield put(requestProjectsSuccess(projects));
    return;
  }
  yield put(requestProjectsFailure());
}

export function* watchRequestProjectsSuccess() {
  yield put(appStopLoading());
}

export function* watchAddMoneyRequest(action) {
  const { amount, projectId } = action;
  const { projects } = (yield select()).projectsReducer;
  // Calculate new amount
  const currentAmount = projects[projectId].amountSaved;
  const newAmountSaved = +currentAmount + +amount
  projects[projectId].amountSaved = newAmountSaved;
  // Store new data
  yield call(storeProjects, projects);
  yield put(addMoneyToProjectCompleted(projects));
}