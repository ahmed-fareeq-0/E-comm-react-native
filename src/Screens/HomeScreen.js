import { StyleSheet, View, Text } from "react-native";
import Header from "../Components/Header";
import Products from "../Components/Products";

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <Products />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        backgroundColor:'#FFF'
    },
})

export default HomeScreen