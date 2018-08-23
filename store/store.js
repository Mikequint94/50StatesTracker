import { createStore, compose, applyMiddleware } from 'redux';
import RootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    compose(
      // applyMiddleware(thunk, ...middlewares),
      // autoRehydrate()
    ));
  return store;
};

export default configureStore;
