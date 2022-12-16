import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import Productpage from './src/pages/DetailsScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import Welcome from './src/pages/Welcome';
import DetailsScreen from './src/pages/DetailsScreen';
export default function App() {
  return( 
    // <Welcome/>
    // <HomeScreen/>
    // <SignUpScreen/>
    // <LoginScreen/>
    <DetailsScreen/>
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
