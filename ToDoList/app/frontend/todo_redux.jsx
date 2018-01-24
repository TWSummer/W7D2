import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos, fetchTodos} from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
import { getTodos } from './util/todo_api_util';

window.allTodos = allTodos;
window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.getTodos = getTodos;
window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={window.store}/>, root);
});
