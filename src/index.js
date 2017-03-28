import React from 'react';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import AppRoutes from '@navigation';

import configureStore from './store/configureStore';

const store = configureStore();

export default function AppContainer() {
  return (
    <Provider store={store}>
      <Router scenes={AppRoutes} />
    </Provider>
  );
}
