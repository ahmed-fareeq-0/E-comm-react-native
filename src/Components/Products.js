
import { View, StyleSheet, ScrollView} from "react-native";
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AllSections from "./AllSections";
import Product from "./Product";


const Products = () => {
  let [fontsLoaded, error] = useFonts({
    Allerta_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />
  }



  return (
    <View style={styles.productsContainer}>
      <ScrollView>
        <AllSections />
        <Product />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default Products