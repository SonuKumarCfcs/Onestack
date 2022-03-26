import React from 'react';
import { Button, View , Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';


import Reusableheader from '../Components/Reusable_header';
import ReusableTextInput from '../Components/ReusableTextInput';
import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';
import { connect } from 'react-redux';
import { setAadharNumber } from '../Module/Onboarding';


class AadharDetailScreen extends React.Component {
    state={
        aadharNoError:''
    }

    aadharValidate=()=>{
        let aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
        let isValid=aadharRegex.test(this.props.AadharNumber);
        if(isValid){
            this.setState({aadharNoError:''});
            return true;
        }
        else{
            this.setState({aadharNoError:'Please enter valid Aadhar number'});
            return false
        }
    }
    render(){
        console.log("AadharNumber==>>",this.props.AadharNumber)
        return(
            <SafeAreaView style={styles.container}>
               
               <Reusableheader 
                    navigation={this.props.navigation}
               />
               <ScrollView>
                    <View style={styles.boxArrange}>
                        <View style={styles.imageArr}>
                            <Text style={styles.textStyle2}>Aadhaar Details</Text>
                            <Image source={constants.Image.Aadhar} style={styles.imageStyle}/>
                        </View>
                        <View >
                                <Text style={styles.textStyle1}>
                                    We will verify your KYC with Aadhaar and use the details to open your OneStack account.
                                </Text>
                        </View>
                    </View>

                    <View style={styles.boxArrange1}>
                        <Text style={styles.textStyle3}>Aadhaar Number or Virtual ID</Text>
                            <ReusableTextInput 
                                keyboard={'numeric'}
                                Data={this.props.AadharNumber}
                                caps={"none"}
                                length={12}
                                onValueInput={(val)=>{
                                   
                                    this.props.setAadharNumber(val.replace(/\s/g, ''));
                                }}
                            />
                            <Text style={{color:'red'}}>{this.state.aadharNoError}</Text>
                            <Text style={styles.textStyle4}>Find Aadhaar Number</Text>
                    </View>
               </ScrollView>
               <View style={styles.linestyle}></View>
               <View style={styles.textArr}>
                   <Text style={styles.textStyle5}>I hereby give my consent to obtain my Aadhaar deatils for</Text>
                   <Text style={styles.textStyle5}>verification/authentication purpose with UIDAI</Text>
               </View>
               <View style={{alignItems:'center'}}>
                <ReusableButton
                    Disabled={this.props.AadharNumber=='' ? true : false}
                    buttonName={"Next"}
                    keyboard={"numeric"}
                    onClick={()=>{this.props.navigation.navigate('AadharVerificationScreen'),this.aadharValidate()}}
                />
               </View>

           </SafeAreaView>  
        )
    }
}


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    },
    textStyle1:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.darkGrey,
        fontSize: constants.vw(12),
        marginTop:8,
    },
    textStyle2:{
        fontStyle:'normal',
        fontWeight:'600',
        color:'black',
        fontSize: constants.vw(18),
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    boxArrange:{
        marginHorizontal:20,
        marginTop:20,
    },
    textStyle3:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.darkGrey,
        fontSize: constants.vw(12),
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
        
    },
    boxArrange1:{
        marginHorizontal: constants.vw(20),
        marginTop: constants.vh(60),
    },
    textStyle4:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.darkBlue,
        fontSize: constants.vw(10),
        marginTop:8,
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    },
    linestyle:{
        width:'100%',
        height:0.4,
        backgroundColor: constants.Colors.darkGrey,
        
    },
    imageStyle:{
        width:constants.vw(47),
        height:constants.vh(30),
    },
    imageArr:{
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red',
        alignItems:'center'
    },
    textArr:{
        alignItems:'center',
        marginTop:10,

    },
    textStyle5:{
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.darkGrey,
        fontSize: constants.vw(10),
        // marginTop:8,
    },


});
const mapStateToProps=(state)=>{
    console.log("State==>>",state)
    return({
        AadharNumber : state.Onboarding.AadharNumber,
    })
}
const mapDispatchToProps = {
    setAadharNumber:(val)=>setAadharNumber(val)
}


export default  connect(mapStateToProps ,mapDispatchToProps)(AadharDetailScreen);