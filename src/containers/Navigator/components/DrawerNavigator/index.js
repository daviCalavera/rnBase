import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//INFO: DEMO SCREENS
import HomeScreen from '../../../Demo/HomeScreen';
import SettingsScreen from '../../../Demo/SettingsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
