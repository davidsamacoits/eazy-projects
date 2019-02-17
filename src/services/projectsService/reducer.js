import * as actionTypes from './actionTypes';

export const initialState = () => ({
  projects: {},
  currentProject: 0,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.PROJECTS_REQUEST_SUCCESS:
      return {
        ...state,
        projects: action.projects,
      };
    case actionTypes.PROJECTS_CHANGE_CURRENT:
      return {
        ...state,
        currentProject: action.currentProject,
      };
    case actionTypes.PROJECT_ADD_MONEY_COMPLETED:
    console.log('>>>>>>>> action', action);
      return {
        ...state,
        projects: action.projects,
      };
    default:
      return state;
  }
};