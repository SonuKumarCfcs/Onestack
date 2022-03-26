import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';

import ReusableHeader from '../Components/ReusableHeader'
import OTPtextInput from '../Components/OTPtextInput'
import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';

export default class PhoneVerificationScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.imageArrangement}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                        <Image source={constants.Image.Vector_arrow} style={styles.iamgeStyle}/>
                    </TouchableOpacity>
                    <Image source={constants.Image.Vector} style={styles.iamgeStyle}/>
                </View>
                <View style={{marginTop:20}}>
                    <ReusableHeader/>
                </View>
                <View style={styles.textArrange}>
                    <Text style={styles.textsyle}>Enter Verification Code</Text>
                    <Text style={styles.textsyle1}>We have sent a verification code to</Text>
                </View>

                <View style={styles.otpStyle}>
                    <OTPtextInput />
                    <OTPtextInput/>
                    <OTPtextInput/>
                    <OTPtextInput/>
                </View>
                <Text style={styles.textsyle2}>Didn't receive the code?</Text>
                <View style={styles.bottonArr}>
                <ReusableButton
                    buttonName={"Verify OTP"}
                    onClick={()=>{this.props.navigation.navigate('EmailIdScreen')}}
                />
                </View>

            </SafeAreaView>    
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
        alignItems:"center"
    },
    iamgeStyle:{
        width: constants.vw(16),
        height: constants.vh(16),
    },
    imageArrangement:{
        width:400,
        height:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        // backgroundColor:'red',
        alignItems:'center',
        marginTop:10

    },
    textsyle:{
        fontSize: constants.vw(24),
        fontStyle:'normal',
        fontWeight:'600',
        marginTop:16,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textsyle1:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.grey,
        marginTop:8,
    },
    textArrange:{
        marginRight:84
    },
    otpStyle:{
        width: constants.vw(220),
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:40,
    },
    bottonArr:{
        marginTop:200,
    },
    textsyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.black,
        marginTop:8,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },

});