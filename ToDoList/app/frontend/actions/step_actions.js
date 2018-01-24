import { getSteps } from '../util/step_api_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';

export const receiveSteps = (steps, todo) => ({
  type: RECEIVE_STEPS,
  steps,
  todo
});

export const fetchSteps = (todo) => ((dispatch) => {
  return getSteps(todo).then((stepsFromServer) => {
    dispatch(receiveSteps(stepsFromServer, todo));
  });
});
