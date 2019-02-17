import { fork } from 'redux-saga/effects';

import applicationSaga from '../../services/applicationService';
import projectsSaga from '../../services/projectsService';

export default function* root() {
  yield [
    applicationSaga,
    projectsSaga,
  ].map(saga => fork(saga));
}