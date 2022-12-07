import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerIcons}>
                <FontAwesome name="opencart" size={30} color="#333333" />
                <AntDesign name="search1" size={35} color="#333333" />
                <Ionicons name="menu-sharp" size={35} color="#333333" />
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    headerContainer: {
        width: deviceWidth,
        height: 60,
        backgroundColor: '#F2A07B',
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