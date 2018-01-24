export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_DETAIL = 'CHANGE_DETAIL';
export const FETCH_TODOS = 'FETCH_TODOS';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../util/todo_api_util';
import { receiveErrors } from './error_actions';
import { fetchSteps } from './step_actions';

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId
});

export const changeStatus = (todoId) => ({
  type: CHANGE_STATUS,
  todoId
});

export const changeDetail = (todoId) => ({
  type: CHANGE_DETAIL,
  todoId
});

export const fetchTodos = () => ( (dispatch) => {
  return getTodos().then((todosFromServer) => {
    dispatch(receiveTodos(todosFromServer));
  });
});

export const createTodo = (todo) => ( (dispatch) => {
  return addTodo(todo).then(
    newTodo => dispatch(receiveTodo(newTodo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
});

export const changeTodoStatus = (todo) => ( (dispatch) => {
  todo.done = !todo.done;
  return updateTodo(todo).then(
    updatedTodo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
});

export const destroyTodo = (todo) => ( (dispatch) => {
  return deleteTodo(todo).then(
    () => {
      return dispatch(removeTodo(todo.id));
    }
  );
});
