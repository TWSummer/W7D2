import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {thunk} from '../middleware/thunk';

function configureStore(preloadedState = {}) {
  return createStore(rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
