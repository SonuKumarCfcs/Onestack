import React from 'react';
import { Button, View , Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';

import Reusableheader from '../Components/Reusable_header';
import ReusableTextInput from '../Components/ReusableTextInput';
import ReusableButton from '../Components/ReusableButton';
import { connect } from 'react-redux';
import {setPANId} from '../Module/Onboarding/action';
import constants from '../constants';


class PanDetailScreen extends React.Component{
    state={
        panNoError:'',
    }
    panValidate=()=>{
        let panRegex=/[A-Z]{5}[0-9]{4}[A-Z]{1}/;
        let isValid=panRegex.test(this.props.PanNo);
        if(isValid){
            this.setState({panNoError:''});
            return true;
        }
        else{
            this.setState({panNoError:'Please fill valid PAN number'});
            return false;
        }
        //(!isValid) ? this.setState({panNoError:'Please fill valid PAN number'}) :null ;
    }
    onValid=()=>{
        this.panValidate()==true && this.props.PanNo.length==10 ? this.props.navigation.navigate('AadharDetailScreen') :null ;
    }
    render(){
       // console.log("PAN No==>>",this.state.panNo)
        return(
           <SafeAreaView style={styles.container}>
               
               <Reusableheader
                    navigation={this.props.navigation}
               />
               <ScrollView>
                    <View style={styles.boxArrange}>
                        <Text style={styles.textStyle2}>PAN Details</Text>
                        <View >
                            <Text style={styles.textStyle1}>
                                    Your PAN deatils are required to open a bank account with OneStack. We ensure that these details will remain secure!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.boxArrange1}>
                        <Text style={styles.textStyle3}>PAN Number</Text>
                            <ReusableTextInput 
                                keyboard={'default'}
                                Data={this.props.PanNo}
                                caps={"characters"}
                                length={10}
                                onValueInput={(val)=>{
                                  
                                    this.props.setPANId(val.trim());
                                   
                                   
                                }}
                            />
                            <Text style={{color:'red'}}>{this.state.panNoError}</Text>
                            <Text style={styles.textStyle4}>Find PAN Number</Text>
                    </View>
               </ScrollView>
               <View style={styles.linestyle}></View>
               <View style={{alignItems:'center'}}>
                <ReusableButton
                    Disabled={this.props.PanNo=='' ? true : false}
                    buttonName={"Confirm"}
                    keyboard={"numeric"}
                    onClick={()=>{this.onValid(),this.panValidate()}}
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
    },
    textStyle1:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.grey,
        fontSize: constants.vw(12),
        marginTop:8,
    },
    textStyle2:{
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        fontSize: constants.vw(18),
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    boxArrange:{
        marginHorizontal: constants.vw(20),
        marginTop: constants.vh(20),
    },
    textStyle3:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.grey,
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
        color:constants.Colors.darkBlue,
        fontSize: constants.vw(10),
        marginTop:8,
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    },
    linestyle:{
        width:'100%',
        height:0.4,
        backgroundColor:constants.Colors.grey,
        
    },

    
});

const mapStateToProps=(state)=>({
    
    PanNo:state.Onboarding.PanNo,

})

const mapDispatchToProps = {
    setPANId:(val)=>setPANId(val)

}


export default connect(mapStateToProps,mapDispatchToProps)(PanDetailScreen)