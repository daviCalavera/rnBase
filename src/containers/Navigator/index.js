import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PlatformNavigator from './components/PlatformNavigator';

const RootStack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="PlatformNavigator"
          component={PlatformNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
