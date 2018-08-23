import { createStore, compose, applyMiddleware } from 'redux';
import RootReducer from '../reducers/rootReducer';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    compose(
      // applyMiddleware(thunk, ...middlewares),
      // autoRehydrate()
    ));
  persistStore(store, null, () => {
    store.getState()
  });
  return store;
};

export default configureStore;
