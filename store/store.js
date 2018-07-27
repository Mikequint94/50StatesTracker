import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
// 
// const middlewares = [thunk];
// 
// if (process.env.NODE_ENV !== 'production') {
//   const { logger } = require('redux-logger');
//   middlewares.push(logger);
// }

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
