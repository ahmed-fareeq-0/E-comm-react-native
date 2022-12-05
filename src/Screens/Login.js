import { TextInput, Text, StyleSheet, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.containerLogin}>
            <Text style={styles.titleLogin}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter Email"/>
                <TextInput style={styles.input} placeholder="Enter Password" />
                <Text style={styles.info1}>create new account</Text>
                <Text style={styles.info2}>forgot password?</Text>
                <Text style={styles.info3}>Sign Up</Text>
            </View>
            
        </View>
    )
}

// Later on in your styles..
const styles = StyleSheet.create({
    titleLogin:{
        textAlign:'center',
        fontSize:35,
        color:'#FFFBEB',
        margin:50
    },
    containerLogin: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        backgroundColor: '#FFFBEB',
        height: 40,
        width: "90%",
        fontWeight: "bold",
        margin: 20,
        marginTop:30,
        paddingLeft: 8,
        borderRadius: 5,
        color:'#495579',
    },
    info1:{
        color:'#FFFBEB',
        textAlign:'center',
        marginTop:20,  
    },
    info2:{
        color:'#FFFBEB',
        textAlign:'center',
        marginTop:5,  
    },
    info3:{
        color:'green',
        textAlign:'center',
        marginTop:5,  
        fontWeight:'bold'
    },
})
