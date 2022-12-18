import React from 'react'
import HomeScreen from '../pages/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name='home' component={HomeScreen}/>
  </Drawer.Navigator>
  );
}

export default AppStack
