import { Text, StyleSheet, Image, View, Dimensions } from "react-native";

const CardProduct = () => {
    return (
        <View style={styles.cardProductContainer}>
            <Image style={styles.cardImage} source={require('../../assets/61nUrDq9nzL._AC_UL1001_.jpg')} />
            <View style={styles.info}>
                <Text style={styles.productTitle}>Wide Walking Shoes</Text>
                <Text style={styles.productPrice}>$80</Text>
            </View>
        </View>
    )
}

const DeviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardProductContainer:{
        width: DeviceWidth - 40,
        height:500,
        // backgroundColor:'red',
        // flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20,
        borderRadius:15,

        borderWidth: 0.5,
        borderStyle:'solid',
        borderColor:'#333333'
        
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 5,
        //   height: 5,
        // },
        // shadowOpacity: 0.75,
        // shadowRadius: 5,
        // elevation: 8,
    },
    cardImage:{
        height:390,
        width: DeviceWidth - 100,
    },
    info:{
        width:DeviceWidth - 90,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30
    },
    productTitle:{
        fontSize:20,
        fontWeight:'600',
    },
    productPrice:{
        fontSize:20,
        fontWeight:'600',
        color:'#828282',
    },
    
})

export default CardProduct