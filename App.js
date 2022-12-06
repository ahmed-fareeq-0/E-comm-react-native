import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import Home from './src/Screens/HomeScreen'
import Login from './src/Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
  },
});
