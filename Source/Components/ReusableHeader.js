import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import constants from '../constants';


export default class ReusableHeader extends React.Component{
    render(){
        return(
            <View style={styles.linestyle}></View>    
        )
    }
}


const styles=StyleSheet.create({
    linestyle:{
        width: constants.vw(390),
        height: constants.vh(0.4),
        backgroundColor: constants.Colors.grey,
    
      },
});