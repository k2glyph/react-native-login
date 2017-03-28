import React from 'react';
import { Scene } from 'react-native-router-flux';

// Configuration
import { AppConfig } from '@constants/';

import Login from '@containers/login/login';

const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'Login'}
      clone
      component={Login}
    />
  </Scene>
);

export default scenes;
