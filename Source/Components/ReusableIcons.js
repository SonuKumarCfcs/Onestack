import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableIcons extends React.Component{
    render(){
       // console.log("Text==>>",this.props.text1)
        return(
            <View style={{...this.props.contentContainerStyle,...styles.iconArr1}}>
                <View style={styles.itemAlign}>
                    <Image source={this.props.image}  style={styles.iconSize1}/>
                    <Text style={styles.textStyle6}>{this.props.text1}</Text>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    iconArr1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(15),
    },
    iconSize1:{
        width: constants.vw(24),
        height: constants.vh(24),
    },
    textStyle6:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop:8,
    },
    itemAlign:{
        alignItems:'center',
        //backgroundColor:'red',
        width: constants.vw(65),
        height: constants.vh(50)
    },
});