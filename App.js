import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens & Components
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import CartScreen from './src/Screens/CartScreen';
import DrawerContent from './src/Components/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
          drawerContent={() => <DrawerContent />}
        >
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Login' component={LoginScreen} />
          <Drawer.Screen name='Register' component={RegisterScreen} />
          <Drawer.Screen name='SingleProduct' component={SingleProductScreen} />
          <Drawer.Screen name='Cart' component={CartScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
