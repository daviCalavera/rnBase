import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from '../../../App';

const RootStack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="App" component={App} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
