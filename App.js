import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import Welcome from './src/pages/Welcome';
// import RootNavigation from './src/RootNavigation';
export default function App() {
  return( 
    <HomeScreen/>
    // <SignUpScreen/>
    // <LoginScreen/>
    // <Welcome/>
  )
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:"center",
 }
});
