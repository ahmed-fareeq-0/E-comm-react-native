import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerIcons}>
                <FontAwesome name="opencart" size={25} color="#503429" />
                <AntDesign name="search1" size={25} color="#503429" />
                <Ionicons name="menu-sharp" size={25} color="#503429" />
            </View>
            <StatusBar style="light" backgroundColor="black" />
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    headerContainer: {
        width: deviceWidth,
        height: 60,
        marginTop: 18,
        // backgroundColor: '#503429',
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})


export default Header