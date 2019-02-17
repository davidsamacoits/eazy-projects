import * as actionTypes from './actionTypes';

export const initialState = () => ({
  isLoading: true,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.APP_START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.APP_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};