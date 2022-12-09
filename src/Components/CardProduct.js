import { Text, StyleSheet, Image, View, Dimensions } from "react-native";

const CardProduct = () => {
    // return (
    //     <View style={styles.cardProductContainer}>
    //         <Image style={styles.cardImage} source={require('../../assets/61nUrDq9nzL._AC_UL1001_.jpg')} />
    //         <View style={styles.info}>
    //             <Text style={styles.productTitle}>Wide Walking Shoes</Text>
    //             <Text style={styles.productPrice}>$80</Text>
    //         </View>
    //     </View>
    // )
    return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={require('../../assets/51VMwnpzJyL._AC_.jpg')} />
            <View style={styles.infoStyle}>
              <Text style={styles.titleStyle}>fdfd</Text>
              <Text style={styles.categoryStyle}>fdfdfd</Text>
            </View>
          </View>
        </View>
      );
}

const deviceWidth = Math.round(Dimensions.get('window').width);

// const styles = StyleSheet.create({
//     cardProductContainer:{
//         width: DeviceWidth - 40,
//         height:500,
//         // backgroundColor:'red',
//         // flexDirection:'column',
//         alignItems:'center',
//         justifyContent:'center',
//         marginVertical:20,
//         borderRadius:15,

//         borderWidth: 0.5,
//         borderStyle:'solid',
//         borderColor:'#333333'
        
//         // shadowColor: '#000',
//         // shadowOffset: {
//         //   width: 5,
//         //   height: 5,
//         // },
//         // shadowOpacity: 0.75,
//         // shadowRadius: 5,
//         // elevation: 8,
//     },
//     cardImage:{
//         height:400,
//         width: '100%',
//     },
//     info:{
//         width:DeviceWidth - 90,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//         paddingTop:30
//     },
//     productTitle:{
//         fontSize:20,
//         fontWeight:'600',
//     },
//     productPrice:{
//         fontSize:20,
//         fontWeight:'600',
//         color:'#828282',
//     },
    
// })
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
      width: deviceWidth - 20,
      alignItems: 'center',
      marginTop: 25,
    },
    cardContainer: {
      width: deviceWidth - offset,
      backgroundColor: '#a29bfe',
      height: 400,
      borderRadius: radius,
  
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 9,
    },
    imageStyle: {
      height: '80%',
      width: deviceWidth - offset,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      opacity: 0.9,
      alignContent: 'center',
      alignSelf: 'center',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: '800',
    },
    categoryStyle: {
      fontWeight: '200',
    },
    // infoStyle: {
    //   marginHorizontal: 10,
    //   marginVertical: 5,
    // },
    iconLabelStyle: {
      flexDirection: 'row',
      marginTop: 10,
    },
  });

export default CardProduct