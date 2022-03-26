import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableDashCard extends React.Component{
    render(){
        return(
            <View style={{...styles.boxstyle,...this.props.contentContainerStyle}}>
                <Image source={this.props.image} />
                <Text style={styles.textStyle1}>{this.props.text1}</Text>
                <Text style={styles.textStyle2}>{this.props.text2}</Text>
                <Text style={styles.textStyle2}>{this.props.text3}</Text>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>{}}
                >
                <Text style={styles.textStyle}>{this.props.buttonName}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    boxstyle:{
        alignItems:'center',
    },
    buttonStyle:{
        width: constants.vw(328),
        height: constants.vh(44),
        borderWidth:1,
        borderColor: constants.Colors.darkBlue,
        borderRadius: constants.vw(100),
        marginTop: constants.vh(15),
       // backgroundColor:"#003C92",
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color: constants.Colors.darkBlue,
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500'
    },
    textStyle1:{
        fontSize: constants.vw(14),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        marginTop: constants.vh(8),
    },
    textStyle2:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop: constants.vh(8),
    },
})