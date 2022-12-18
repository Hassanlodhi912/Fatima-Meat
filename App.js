import {StyleSheet } from 'react-native';
import AuthStack from "./src/config/AuthStack";
import AppStack from "./src/config/AppStack"
export default function App() {
  return (
      // <AppStack/>
      <AuthStack/>
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
