import { Text, View, StyleSheet, ScrollView } from "react-native";
import CartProduct from "../Components/CartProduct";
import Header from "../Components/Header";

const CartScreen = () => {
    return (
            <View style={styles.cartContainer}>
                <Header />
                <ScrollView>
                <Text style={styles.titleScreen}>Cart</Text>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#fff',
    },
    titleScreen:{
        fontSize: 30,
        fontWeight: "bold",
        paddingTop:10,
        paddingBottom:30,
        marginLeft:20
    },
})

export default CartScreen