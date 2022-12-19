import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

// icon 
import { AntDesign } from '@expo/vector-icons';


const DrawerContent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.drawerContainer}>
            <DrawerContentScrollView>

                <TouchableOpacity style={[styles.item, { backgroundColor: "#76BA9980" }]} onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="home" size={24} color="black" />
                    <Text style={styles.one}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cart")} >
                    <AntDesign name="shoppingcart" size={24} color="black" />
                    <Text style={styles.one}>Cart</Text>
                </TouchableOpacity>

            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        // backgroundColor:'red'
    },
    item: {
        flexDirection: 'row',
        // backgroundColor: '#76BA9980',
        padding: 10,
        marginHorizontal: 8,
        marginVertical: 5
    },
    one: {
        fontSize: 18,
        marginLeft: 20,
    }
})

export default DrawerContent