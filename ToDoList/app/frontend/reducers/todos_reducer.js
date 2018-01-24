import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, CHANGE_STATUS, CHANGE_DETAIL} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false,
    detail: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true,
    detail: false
  },
};

const todoReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      let newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach( (element) => {
        newState[element.id] = element;
      });
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todoId];
      return newState;
    case CHANGE_STATUS:
      newState = merge({}, state);
      newState[action.todoId].done = !newState[action.todoId].done;
      return newState;
    case CHANGE_DETAIL:
      newState = merge({}, state);
      newState[action.todoId].detail = !newState[action.todoId].detail;
      return newState;
    default:
      return state;
  }
};


export default todoReducer;
