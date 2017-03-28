import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

import { AppConfig } from '@constants/';

import UserList from '@containers/users/userlist';

import LoginScene from './login';

export default Actions.create(
  <Scene key={'root'}>
    {LoginScene}
    <Scene
      key={'app'}
      {...AppConfig.navbarProps}
      title={AppConfig.appName} hideNavBar={false}
      type={ActionConst.RESET}
    >
      <Scene
        {...AppConfig.navbarProps}
        key={'home'}
        title={'Home'}
        clone
        component={UserList}
      />
    </Scene>
  </Scene>,
);
