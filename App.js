import { StyleSheet } from 'react-native';
import Welcome from './src/pages/Welcome';
import LoginScreen from './src/pages/LoginScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import HomeScreen from "./src/pages/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome"screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcome' component={Welcome}  /> 
        <Stack.Screen name="Signin" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  }
});
