import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, Image } from "react-native";
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

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

const Product = () => {

    let [fontsLoaded, error] = useFonts({
        Allerta_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View>
            {<FlatList
                data={ProductsDate}
                keyExtractor={(item, index) => index}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.cardContainer}>
                                <Image style={styles.imageStyle} source={item.img} />
                                <View style={styles.infoStyle}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                    <Text style={styles.categoryStyle}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />}

            <Text style={styles.section}>Shoes section</Text>
            {<FlatList
                data={ProductsDate}
                keyExtractor={(item, index) => index}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.cardContainer}>
                                <Image style={styles.imageStyle} source={item.img} />
                                <View style={styles.infoStyle}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                    <Text style={styles.categoryStyle}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />}
            <Text style={styles.section}>Shoes section</Text>
            {<FlatList
                data={ProductsDate}
                keyExtractor={(item, index) => index}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.cardContainer}>
                                <Image style={styles.imageStyle} source={item.img} />
                                <View style={styles.infoStyle}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                    <Text style={styles.categoryStyle}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />}
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    cardContainer: {
        width: 300,
        height: 200,
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingVertical: 15,
    },
    imageStyle: {
        height: '80%',
        width: deviceWidth - offset,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: "Allerta_400Regular",
    },
    categoryStyle: {
        fontWeight: '500',
        fontSize: 16,
        color: '#76BA99',
        fontFamily: "Allerta_400Regular",
    },
    infoStyle: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    section: {
        paddingHorizontal: 25,
        paddingTop: 20,
        fontFamily: "Allerta_400Regular",
        fontSize: 20
    }
});


export default Product