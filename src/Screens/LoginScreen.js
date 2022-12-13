import { TextInput, Text, StyleSheet, View, Dimensions } from "react-native";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.containerLogin}>
            <Text style={styles.titleLogin}>Sign In</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter Email" />
                <TextInput style={styles.input} placeholder="Enter Password" />
                <View style={styles.info}>
                    <Text style={styles.btn}  >Sign In</Text>
                    <Text style={styles.info1}>create new account</Text>
                    <Text style={styles.info2}>forgot password?</Text>
                    <Text style={styles.info3} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
                </View>
            </View>

        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const margin = 40;
const fontSize = 17;

// Later on in your styles..
const styles = StyleSheet.create({
    titleLogin: {
        textAlign: 'center',
        fontSize: 40,
        color: '#FFFBEB',
        marginBottom: margin,
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3333',
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#FFFBEB',
        height: 50,
        width: deviceWidth - 30,
        fontWeight: "bold",
        margin: 20,
        paddingLeft: 8,
        borderRadius: 8,
        color: '#495579',
    },
    btn: {
        fontSize: 20,
        backgroundColor: '#3F3B6C',
        paddingHorizontal: 45,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 25
    },
    info: {
        margin: margin,
        alignItems: 'center',
    },
    info1: {
        color: '#FFFBEB',
        fontSize: fontSize,
    },
    info2: {
        color: '#FFFBEB',
        fontSize: fontSize,
    },
    info3: {
        color: 'green',
        fontSize: fontSize,
        fontWeight: 'bold'
    },
})

export default LoginScreen
