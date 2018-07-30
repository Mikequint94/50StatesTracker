import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import AppEntry from './components/appEntry';
  
export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppEntry/>
      </Provider>

    );
  }
}