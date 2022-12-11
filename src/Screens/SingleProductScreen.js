import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Header from "../Components/Header";
import NumericInput from 'react-native-numeric-input';
import { useState } from "react";

const SingleProductScreen = () => {

    const [count, setCount] = useState(0)

    return (
        <View style={styles.singleProductContainer}>
            <Header />
            <View style={styles.container} >
                <View>
                    <Image style={styles.imageStyle} source={require("../../assets/51bS2oySd6L._AC_.jpg")} />
                </View>

                <View style={styles.infoContainer} >
                    <Text style={styles.titleProduct}>Athletic Shoe</Text>
                    <View style={styles.info} >
                        <NumericInput
                            value={count}
                            onChange={value => setCount({ value })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={140}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            maxValue={15}
                            minValue={0}
                            valueType='real'
                            rounded
                            textColor='#503429'
                            iconStyle={{ color: '#fff' }}
                            rightButtonBackgroundColor="#76BA99"
                            leftButtonBackgroundColor="#76BA99"
                        />
                        <Text>$80</Text>
                    </View>
                    <Text style={styles.desc}> 
                     or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
                    </Text>
                    <Text style={styles.btn}>ADD TO CART</Text>
                </View> 
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    singleProductContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'column',
        height: '50%',
    },
    imageStyle: {
        height: '85%',
        width: deviceWidth - 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    titleProduct: {
        fontSize: 25,
        fontWeight: "bold"
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
    },
    infoContainer:{
    paddingHorizontal: 20,
    },
    desc:{
        width:deviceWidth - 25,
        paddingVertical:10,
        color:'#616161',
        height:140,
    },
    btn:{
        paddingVertical:10,
        backgroundColor:'#76BA99',
        textAlign:'center',
        borderRadius:5,
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
    }
});


export default SingleProductScreen