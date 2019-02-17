import { combineReducers } from 'redux';

import applicationReducer from '../../services/applicationService/reducer';
import projectsReducer from '../../services/projectsService/reducer';

export default combineReducers({
  applicationReducer,
  projectsReducer,
});