import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//INFO: DEMO SCREENS
import HomeScreen from '../../../Demo/HomeScreen';
import SettingsScreen from '../../../Demo/SettingsScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
