import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";
import { Image } from "react-native";
import CardProduct from "./CardProduct";
import { useFonts } from 'expo-font';
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import AppLoading from 'expo-app-loading'




const sections = [
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' },
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' },
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' },
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' },
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' },
  { item: 'all' },
  { item: 'coats' },
  { item: 'dresses' }
]

const ProductsDate = [
  {
    title: 'Athletic Shoe',
    price: '$ 80',
    img: require('../../assets/5121eoFweJL._AC_.jpg'),
  },
  {
    title: 'Athletic Shoe',
    price: '$ 80',
    img: require('../../assets/51bS2oySd6L._AC_.jpg'),
  },
  {
    title: 'Athletic Shoe',
    price: '$ 80',
    img: require('../../assets/51VMwnpzJyL._AC_.jpg'),
  },
  {
    title: 'Athletic Shoe',
    price: '$ 80',
    img: require('../../assets/61nUrDq9nzL._AC_UL1001_.jpg'),
  },
  {
    title: 'Athletic Shoe',
    price: '$ 80',
    img: require('../../assets/71HhnKGcJtL._AC_UL1001_.jpg'),
  }
]

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
        {<FlatList
          data={sections}
          keyExtractor={(item, index) => index}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styles.sectionContainer}>
                <Text style={styles.allSections}>{item.item}</Text>
              </View>
            )
          }}
        />}

        {<FlatList
          data={ProductsDate}
          keyExtractor={(item, index) => index}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styless.container}>
                <View style={styless.cardContainer}>
                  <Image style={styless.imageStyle} source={item.img} />
                  <View style={styless.infoStyle}>
                    <Text style={styless.titleStyle}>{item.title}</Text>
                    <Text style={styless.categoryStyle}>{item.price}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />}

        <Text style={styless.section}>Shoes section</Text>
        {<FlatList
          data={ProductsDate}
          keyExtractor={(item, index) => index}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styless.container}>
                <View style={styless.cardContainer}>
                  <Image style={styless.imageStyle} source={item.img} />
                  <View style={styless.infoStyle}>
                    <Text style={styless.titleStyle}>{item.title}</Text>
                    <Text style={styless.categoryStyle}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  sectionContainer: {
    marginHorizontal: 15,
    marginVertical: 25,
    // paddingHorizontal:15,
    // paddingVertical:15
  },
  allSections: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily:'Allerta_400Regular',
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#76BA99',
    borderRadius: 20,
    color: '#FFF'
  },
})



const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styless = StyleSheet.create({
  container: {
    // width:deviceWidth,
    alignItems: 'center',
    // marginTop: 25,
    marginVertical: 20,
  },
  cardContainer: {
    width: 290 - offset,
    // backgroundColor: '#a29bfe',
    height: 200,
    // marginLeft:50,
    // borderRadius: radius,borderBottomColor:'red',
    // borderWidth:10,
    // borderStyle:'solid',


    // shadowColor: '#000',
    shadowOffset: {
      // width: 10,
      // height: 1,
    },
    // shadowOpacity: 0.75,
    // shadowRadius: 5,
    // elevation: 9,
  },
  imageStyle: {
    height: '80%',
    width: deviceWidth - offset,
    resizeMode: 'contain',
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  categoryStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: '#76BA99'
  },
  infoStyle: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // iconLabelStyle: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  // },
  section: {
    paddingHorizontal: 25,
    paddingTop: 20,
    // fontWeight: 'bold',
    fontFamily:"Allerta_400Regular",
    fontSize: 20
  }
});

export default Products