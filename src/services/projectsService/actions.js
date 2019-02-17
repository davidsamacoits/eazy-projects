import * as actionTypes from './actionTypes';

export function requestProjects() {
  return {
    type: actionTypes.PROJECTS_REQUEST,
  };
}

export function requestProjectsSuccess(projects) {
  return {
    type: actionTypes.PROJECTS_REQUEST_SUCCESS,
    projects,
  };
}

export function requestProjectsFailure() {
  return {
    type: actionTypes.PROJECTS_REQUEST_FAILURE,
  };
}

export function changeCurrentProject(currentProject) {
  return {
    type: actionTypes.PROJECTS_CHANGE_CURRENT,
    currentProject,
  }
}

export function addMoneyToProject(projectId, amount) {
  return {
    type: actionTypes.PROJECT_ADD_MONEY_REQUEST,
    projectId,
    amount,
  }
}

export function addMoneyToProjectCompleted(projects) {
  return {
    type: actionTypes.PROJECT_ADD_MONEY_COMPLETED,
    projects,
  }
}