import React from 'react';
import {Platform} from 'react-native';

//INFO - Switch to Platform specific Navigator:
const Navigator = Platform.select({
  android: () => require('../DrawerNavigator').default,
  ios: () => require('../TabNavigator').default,
})();

function PlatformNavigator() {
  return <Navigator />;
}

export default PlatformNavigator;
