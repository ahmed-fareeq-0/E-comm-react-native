import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import CardProduct from "./CardProduct";

// const [sections, setSections] = useState([
//     {item:'all'},
//     {item:'coats'},
//     {item:'dresses'}
// ])

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

const Products = () => {
    return (
        <View style={styles.productsContainer}>
            {<FlatList
                data={sections}
                keyExtractor={(item, index) => index}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.section}>{item.item}</Text>
                        </View>
                    )
                }}
            />}
            <CardProduct />
        </View>
    )
}

const styles = StyleSheet.create({
    productsContainer: {
        // backgroundColor: 'red',
        // marginHorizontal: 18,
        // marginVertical: 15,

        alignItems:'center'

    },
    sectionContainer: {
        marginHorizontal: 15,
        marginVertical: 25,
    },
    section: {
        fontSize:20,
        paddingHorizontal:25,
        paddingVertical:10,
        backgroundColor:'#F2A07B',
        borderRadius:20,
        color:'#333333'
    },
})

export default Products