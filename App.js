import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import Welcome from './src/pages/Welcome';
export default function App() {
  return( 
    // <Welcome/>
    <HomeScreen/>
    // <SignUpScreen/>
    // <LoginScreen/>
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
