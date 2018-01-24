import {RECEIVE_STEPS} from '../actions/step_actions';
import merge from 'lodash/merge';

const initialState = {};

const stepReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STEPS:
      let newState = merge({}, state);
      newState[action.todo.id] = action.steps;
      return newState;
    default:
      return state;
  }
};


export default stepReducer;
