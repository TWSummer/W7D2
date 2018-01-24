export const getSteps = (todo) => {
  return $.ajax({
    method: 'GET',
    url: `/api/todos/${todo.id}/steps`
  });
};
