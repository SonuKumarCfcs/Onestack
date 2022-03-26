import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image} from'react-native';
import constants from '../constants';


export default class ReusableButton extends React.Component {
    

    render(){
        //console.log('disabled==>',this.props.Disabled)
        return(
            <TouchableOpacity
            disabled={this.props.Disabled} 
            style={[{...styles.buttonStyle,...this.props.contentcontainerStyle,},{backgroundColor: this.props.Disabled ? constants.Colors.blur :constants.Colors.darkBlue,}]}
            onPress={()=>{this.props.onClick()}}
            >
                <Text style={styles.textStyle}>{this.props.buttonName}</Text>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    buttonStyle:{
        width: constants.vw(328),
        height: constants.vh(44),
        borderRadius: constants.vw(100),
        marginTop: constants.vh(15),
        
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color: constants.Colors.white,
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500',
        fontFamily: constants.Fonts.IBMPlexSans_Medium
    }

})