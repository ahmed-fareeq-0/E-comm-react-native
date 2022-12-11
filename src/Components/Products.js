
import { View, StyleSheet, ScrollView } from "react-native";

import AllSections from "./AllSections";
import Product from "./Product";


const Products = () => {
  



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