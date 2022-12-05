import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import Home from './src/Screens/Home'
import Login from './src/Screens/Login';

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
    backgroundColor: '#263159',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
