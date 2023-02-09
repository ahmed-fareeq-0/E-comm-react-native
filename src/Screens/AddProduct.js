import { useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, ScrollView, TextInput, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Components/Header";




const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = () => {

        let result = fetch("http://localhost:4000/new-item", {
            method:'POST',
            body:JSON.stringify({"title": title, "price":price}),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            console.log(res);
            return res.json()
        }).then((res) => {
            console.log(res);
        })

        // const data = {
        //     title,title,
        //     price:price
        // }

        // const config = {
        //     headers:{
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        //   };
        //  axios.post("http://localhost:4000/new-item", data , config ).then((res) => {
        //     console.log(res);
        // })
        
        // result = result.json();
    }

    return(
        <View style={styles.adminContainer}>
            <Header />
            <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value={title} style={styles.input} onChangeText={text => setTitle(text)} placeholder="title" />
                <TextInput value={price} style={styles.input} onChangeText={text => setPrice(text)} placeholder="price" />
                <TouchableOpacity>
                <Text style={styles.btn} onPress={handleAddProduct} >Add product</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const margin = 40;
const fontSize = 17;

const styles = StyleSheet.create({
    adminContainer:{
        flex:1,
        // justifyContent:'center'
        
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-end',
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
        marginTop:40
    },
    container:{
        flex:1,
        justifyContent:"center",
    }
})

export default AddProduct