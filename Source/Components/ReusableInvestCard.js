import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableInvestCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageArr}>
                    <Image source={this.props.image} />
                    <Text style={styles.textStyle1}>{this.props.text1}</Text>
   
                </View>
                <Text style={styles.textStyle2}>{this.props.text2}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width: constants.vw(158),
        height: constants.vh(72),
        borderRadius: constants.vw(10),
        borderWidth:0.4,
        borderColor: constants.Colors.grey,
        marginTop: constants.vh(15),
       // backgroundColor:'#F9FAFC',
        alignItems:'flex-start',
          //justifyContent:'space-between',
        paddingLeft: constants.vw(5)
    },
        iamgeSize:{
            width: constants.vw(32),
            height: constants.vh(32),
        },
        textStyle1:{
            fontSize: constants.vw(12),
            fontWeight:'400',
            fontStyle:'normal',
            color: constants.Colors.darkGrey,
            marginLeft:8
        },
        textStyle2:{
            fontSize: constants.vw(16),
            fontWeight:'600',
            fontStyle:'normal',
            color: constants.Colors.black,
            // marginLeft:8, 
            marginTop: constants.vh(15)
        },
        imageArr:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            // paddingLeft:8
            marginTop: constants.vh(10)
        }
    
});