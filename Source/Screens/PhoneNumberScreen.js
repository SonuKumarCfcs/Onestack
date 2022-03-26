import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import ReusableTextInput from '../Components/ReusableTextInput';
import ReusableHeader from '../Components/ReusableHeader'
import ReusableButton from '../Components/ReusableButton';
import { connect ,useDispatch} from 'react-redux';
import {setPhoneNumber} from '../Module/Onboarding/action';
import constants from '../constants';
import utils from '../utils';

 
// const phoneRegex = /^\d{8,14}$/;



class PhoneNumberScreen extends React.Component {
    state={
       mobNumberError: '',
    }
    
    phoneValidate=()=>{
       let phoneRegex =/^[0-9\b]+$/;
       let isValid=phoneRegex.test(this.props.phoneNumber);
       console.log("isValid==>",isValid)
       if(isValid){
        this.setState({mobNumberError:''})
        return true;
       }
       else{
        this.setState({mobNumberError:'hello!, this is wrong side'});
        return false;
       }
        //(!isValid) ?this.setState({mobNumberError:'hello!, this is wrong side'}) :this.setState({mobNumberError:''})

    }
    onValid=()=>{
        this.phoneValidate()==true && this.props.phoneNumber.length==10 ? this.props.navigation.navigate('PhoneVerificationScreen') : null;
    }

    render(){
     //console.log("phonenumber==>>",this.props.phoneNumber)
     console.log("phoneNumber==>>",this.props.phoneNumber)
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.imageArrangement}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                        <Image source={constants.Image.Vector_arrow} style={styles.iamgeStyle}/>
                    </TouchableOpacity>
                    <Image source={constants.Image.Vector} style={styles.iamgeStyle}/>
                </View>
                <View style={styles.linestyle}></View>
                <View style={styles.textArrange}>
                    <Text style={styles.textsyle}>Hi! What's your mobile</Text>
                    <Text style={styles.textsyle}>number?</Text>
                    <View style={styles.boxstyle}>
                        <Text style={styles.textsyle1}>We'll use this to verify youraccount</Text>
                    </View>
                </View>
                <View style={styles.textArrange1}>
                    <Text style={styles.textsyle2}>Mobile Number</Text>
                    <ReusableTextInput
                        
                        keyboard={'numeric'}
                        Data={this.props.phoneNumber}
                        onValueInput={(val)=>{
                            // console.log("Value==>",val.replace(/\s/g, '')+"jj")
                            this.props.setPhoneNumber(val.replace(/\s/g, ''));
                           
                            
                        }}
                        length={10}
                    />
                 <Text style={styles.textsyle1}>Prop Tip: Use the number linked with Aadhar Card</Text>
                 <Text style={{color:'red'}}>{this.state.mobNumberError}</Text>
                </View>
                {/* <View style={styles.textArrange2}>
                    <Text style={styles.textsyle1}>Prop Tip: Use the number linked with Aadhar Card</Text>
                </View> */}
                <View style={styles.line}> 
                    <ReusableHeader/>
                </View>
                <Text style={styles.textsyle3}>By continuing, you agree to the given T&C and Privacy Policy</Text>
                <ReusableButton 
                Disabled={this.props.phoneNumber.length=='' ? true : false} 
                buttonName={"Send OTP"} 
                onClick={()=>{this.onValid(),this.phoneValidate()}}
                />
                
            </SafeAreaView>
        )
    }
}


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
        alignItems:'center',
    },
    iamgeStyle:{
        width: constants.vw(15),
        height: constants.vh(15),
    },
    imageArrangement:{
        width: constants.vw(400),
        height: constants.vh(30),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vh(25),
       // backgroundColor:'red',
        alignItems:'center',
        marginTop: constants.vh(10),

    },
    linestyle:{
        width:'100%',
        height: constants.vh(0.4),
        backgroundColor: constants.Colors.grey,
        marginTop: constants.vh(20),
    },
    textsyle:{
        fontSize:24,
        fontStyle:'normal',
        fontWeight:'600',
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textArrange:{
        width: constants.vw(328),
        height: constants.vh(64),
        marginTop: constants.vh(16),
        marginRight: constants.vh(16),
    },
    textsyle1:{
        fontSize:constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.grey,
        marginTop: constants.vh(8),
    },
    boxstyle:{
        marginTop:8,
    },
    textsyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.grey,
    },
    textArrange1:{
        width: constants.vw(328),
        height: constants.vh(64),
        marginTop: constants.vh(40),
        marginRight: constants.vw(16),
    },
    // textArrange2:{
        
    //     marginTop:10,
    //     marginRight:57
    // },

    line:{
        marginTop: constants.vh(400),   
    },
    textsyle3:{
        fontSize: constants.vw(10),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.grey,
        marginTop: constants.vh(8)
    },
});

const mapStateToProps=(state)=>{
    //console.log("state=>>",state)
    return({
    phoneNumber:state.Onboarding.phoneNumber,
    
})}

const mapDispatchToProps = {
    setPhoneNumber:(val)=>setPhoneNumber(val)
    
}


export default connect(mapStateToProps,mapDispatchToProps)(PhoneNumberScreen);