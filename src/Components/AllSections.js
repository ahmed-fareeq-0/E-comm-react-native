import { Text, View, StyleSheet, FlatList } from "react-native";
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

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

const AllSections = () => {

    // let [fontsLoaded, error] = useFonts({
    //     Allerta_400Regular
    // });

    // if (!fontsLoaded) {
    //     return <AppLoading />
    // }

    return (
        <View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginHorizontal: 15,
        marginVertical: 25,
    },
    allSections: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: "Allerta_400Regular",
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#76BA99',
        borderRadius: 20,
        color: '#FFF'
    },
})

export default AllSections