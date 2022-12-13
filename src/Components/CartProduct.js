import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TextBase } from "react-native";
import Header from "../Components/Header";


const CartProduct = () => {
    return (
            
            <View>
                <View style={styles.itemsContainer}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.imageStyle} source={require('../../assets/51bS2oySd6L._AC_.jpg')} />
                    </View>
                    <View style={{width:deviceWidth - 130, flexDirection:'column', justifyContent:'space-around', }}>
                        <View style={styles.infoProduct}>
                            <Text style={styles.titleProduct}>Athletic Shoe</Text>
                            <Text style={styles.priceProduct}>$80</Text>
                        </View>
                        <View style={styles.infoProduct}>
                            <Text style={styles.numberProducts}>x2</Text>
                            <Text style={styles.Size}>M</Text>
                            <Text style={styles.btnRemove}>Remove</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.border} ></View> 
            </View>
            
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    // cartContainer: {
    //     flex: 1,
    //     flexDirection:'column',
    //     backgroundColor:'#fff',
    // },
    titleScreen:{
        fontSize: 30,
        fontWeight: "bold",
        paddingTop:10,
        paddingBottom:30,
        marginLeft:20
    },
    itemsContainer: {
        flexDirection: 'row',
        width:deviceWidth,
        // borderBottomColor:'#616161',
        // borderBottomWidth:1,
        // borderStyle:'solid',
        paddingBottom:20
        // alignItems:'center',
    },
    imgContainer: {
        height: 130,
        width: 130
    },
    imageStyle: {
        resizeMode: 'contain',
        width: "100%",
        height: '100%',
    },
    titleProduct: {
        fontSize: 18,
        // paddingRight:'20%',
        fontWeight: "bold",
        marginRight:40
    },
    priceProduct: {
        fontSize: 18,
        fontWeight: "bold",
    },
    infoProduct:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        width:'100%',
    },
    numberProducts:{
        fontSize: 18,
        fontWeight: "bold",
    },
    Size:{
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal:20
    },
    btnRemove:{
        fontSize: 18,
        fontWeight: "bold",
        color:'red'
    },
    border:{
        backgroundColor:'#616161',
        width:'92%',
        height: 0.5,
        alignSelf:'center',
        marginBottom:20
    }
    
})

export default CartProduct