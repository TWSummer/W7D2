export const getTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};

export const addTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {todo: todo},
    dataType: 'json'
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: {todo: todo},
    dataType: 'json'
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`,
  });
};
