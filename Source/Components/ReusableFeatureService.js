import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';



export default class ReusableFeatureService extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageArr}>
                    <Image source={this.props.image} style={styles.iamgeSize}/>
                    <Text style={styles.textStyle1}>{this.props.text1}</Text>
   
                </View>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width: constants.vw(160),
        height: constants.vh(100),
        borderRadius: constants.vw(10),
        borderWidth:0.4,
        borderColor:'grey',
        marginTop: constants.vh(15),
       // backgroundColor:'#F9FAFC',
         alignItems:'center',
         justifyContent:'center',
       // paddingLeft:10
    },
    iamgeSize:{
            width: constants.vw(40),
            height: constants.vh(40),
    },
    textStyle1:{
            fontSize: constants.vw(12),
            fontWeight:'400',
            fontStyle:'normal',
            color: constants.Colors.darkGrey,
            marginLeft:constants.vw(8)
    },
    imageArr:{
        justifyContent:'center',
        alignItems:'center',
       
    }
})