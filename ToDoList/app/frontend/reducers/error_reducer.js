import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';

const initialState = [];

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};


export default errorReducer;
