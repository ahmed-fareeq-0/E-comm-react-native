import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

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
        <View>

            {<FlatList
                data={sections}
                keyExtractor={(item, index) => index}
                horizontal
                //   contentContainerStyle={{ paddingBottom: 180 }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.section}>{item.item}</Text>
                        </View>
                    )
                }}
            />}

        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        // backgroundColor: 'red',
        // marginHorizontal: 18,
        // marginVertical: 15,

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

    },
})

export default Products