import {combineReducers} from 'redux';
import todoReducer from './todos_reducer';
import errorReducer from './error_reducer';
import stepReducer from './step_reducer';

const rootReducer = combineReducers ({
  todos: todoReducer,
  errors: errorReducer,
  steps: stepReducer
});

export default rootReducer;
