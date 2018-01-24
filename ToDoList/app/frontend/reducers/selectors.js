export const allTodos = (state) => {
  return Object.keys(state.todos).map( (key) => {
    return state.todos[key];
  });
};

export const allSteps = (state) => {
  return Object.keys(state.steps).map( (key) => {
    return state.steps[key];
  });
};
