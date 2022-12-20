import React from 'react'
import Welcome from '../pages/Welcome';
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen';
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from '../pages/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Welcome"screenOptions={{headerShown:false}}>
    <Stack.Screen name='Welcome' component={Welcome}  /> 
    <Stack.Screen name="Signin" component={LoginScreen}/>
    <Stack.Screen name="Signup" component={SignUpScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Detail" component={DetailsScreen}/>
  </Stack.Navigator>
  )
}
export default AuthStack
