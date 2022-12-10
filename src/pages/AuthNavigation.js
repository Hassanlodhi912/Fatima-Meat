import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="welcomepage" component={<Welcome />} />
            <Stack.Screen name="signup" component={<SignUpScreen />} />
            <Stack.Screen name="signIn" component={<LoginScreen />} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
