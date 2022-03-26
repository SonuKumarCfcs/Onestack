import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import constants from '../constants';

export default class ReusableTextInput extends React.Component{
    render(){
        
        return(
            <TextInput 
                style={styles.textInputstyle}
                keyboardType={this.props.keyboard}
                value={this.props.Data}
                onChangeText={(val)=>{this.props.onValueInput(val)}}
                maxLength={this.props.length}
                autoCapitalize={this.props.caps}

            />

            
        )
    }
}

const styles=StyleSheet.create({
    textInputstyle:{
        width: constants.vw(328),
        height: constants.vh(40),
        borderRadius: constants.vw(8),
        borderColor: constants.Colors.grey,
        borderWidth: constants.vh(0.4),
        marginTop: constants.vh(8),
        padding: constants.vw(10)
    }
});