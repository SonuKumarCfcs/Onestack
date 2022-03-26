import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import constants from '../constants';


export default class OTPtextInput extends React.Component{
    render(){
        return(
            <TextInput 
                style={styles.textInputstyle}
                keyboardType='numeric'
                maxLength={1}

            />

            
        )
    }
}

const styles=StyleSheet.create({
    textInputstyle:{
        width: constants.vw(44),
        height: constants.vh(44),
        borderRadius: constants.vh(8),
        borderColor: constants.Colors.grey,
        borderWidth: constants.vw(0.4),
        marginTop: constants.vh(8),
    }
});