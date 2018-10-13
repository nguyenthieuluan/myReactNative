import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import React from 'react'
import App from './App';

import configureStore from './src/store/configureStore';
console.disableYellowBox = true;
const store = configureStore();
console.disableYellowBox = true;
const RNRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>);

AppRegistry.registerComponent('myReactNative', () => RNRedux);
