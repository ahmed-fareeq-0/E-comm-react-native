import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
          {/* <Stack.Screen name='Register' component={RegisterScreen} /> */}
          {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
          <Stack.Screen name='SingleProduct' component={SingleProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
