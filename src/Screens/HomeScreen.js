import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen () {
    return (
        <View>
            <Text style={Styles.bg}>Home</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    bg:{
        color:'red'
    }
})