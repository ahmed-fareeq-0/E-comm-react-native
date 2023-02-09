import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

// icon 
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import imgProfile from '../../assets/2783_116.jpg';

const DrawerContent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.drawerContainer}>
            <DrawerContentScrollView>

                <TouchableOpacity style={[styles.item, { marginBottom: 20, alignItems: 'center', }]}>
                    <Image style={styles.imgProfileStyle} source={imgProfile} />
                    <View>
                        <Text style={styles.one}>ahmed fareeq</Text>
                        <Text style={{ color: 'blue', fontSize: 16, marginLeft: 20, }}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.item, { backgroundColor: "#76BA9980" }]} onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="home" size={24} color="black" />
                    <Text style={styles.one}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cart")} >
                    <AntDesign name="shoppingcart" size={24} color="black" />
                    <Text style={styles.one}>Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cart")} >
                    <AntDesign name="setting" size={24} color="black" />
                    <Text style={styles.one}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Cart")} >
                <MaterialCommunityIcons name="details" size={24} color="black" />
                    <Text style={styles.one}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("addProduct")} >
                <MaterialCommunityIcons name="details" size={24} color="black" />
                    <Text style={styles.one}>Add Product</Text>
                </TouchableOpacity>

            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 8,
        marginVertical: 5
    },
    one: {
        fontSize: 18,
        marginLeft: 20,
    },
    imgProfileStyle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        resizeMode: 'contain',
    }
})

export default DrawerContent