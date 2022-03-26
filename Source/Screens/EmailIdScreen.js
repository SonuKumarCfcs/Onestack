import React from 'react';
import { Button,  View,Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';

import ReusableHeader from '../Components/ReusableHeader';
import ReusableButton from '../Components/ReusableButton';
import ReusableTextInput from '../Components/ReusableTextInput';
import { connect } from 'react-redux';
import {setEmailId} from '../Module/Onboarding/action';
import constants from '../constants';


class EmailIdScreen extends React.Component{
    state={
        emailIdError:'',
    }

    emailValidate=()=>{
        let emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let isValid=emailRegex.test(this.props.emailId);
        if(isValid){
            this.setState({emailIdError:''});
            return true;
        }
        else{
            this.setState({emailIdError:'fill correct email Id'}) ;
            return false;
        }
        //(!isValid) ?this.setState({emailIdError:'fill correct email Id'}) :this.setState({emailIdError:''})
    }
    onValid=()=>{
        this.emailValidate()==true ? this.props.navigation.navigate('PanDetailScreen') : null;
    }
    render(){
        //console.log("")
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
                <ScrollView>
                <View style={styles.textArrange}>
                    <Text style={styles.textsyle}>What's your Email ID?</Text>
                    <Text style={styles.textsyle1}>We'll only share important financial information here</Text>
                </View>
                <View style={styles.textArrange1}>
                    <Text style={styles.textsyle2}>Email ID</Text>
                    <ReusableTextInput
                        keyboard={'email-address'}
                        Data={this.props.emailId}
                        caps={'none'}
                        onValueInput={(val)=>{
                           
                            this.props.setEmailId(val.trim())
                        }}
                    
                    />
                    <Text style={{color:'red'}}>{this.state.emailIdError}</Text>
                </View>
                </ScrollView>
                {/* <View style={{marginTop:430}}> */}
                    <ReusableHeader/>
                {/* </View> */}
                <View style={styles.bottonArr}>
                    <ReusableButton
                        Disabled={this.props.emailId=='' ? true : false}
                        buttonName={"Confirm"}
                        keyboard={"email-address"}
                        onClick={()=>{this.onValid(),this.emailValidate()}}
                    />
                </View>
                <Text style={styles.textArrange2}>Skip and Continue</Text>
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
        width: constants.vw(400),
        height: constants.vh(30),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(28),
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
        marginRight:55
    },
    textArrange1:{
        width: constants.vw(328),
        height: constants.vh(64),
        marginTop: constants.vw(32),
        marginRight: constants.vw(16),
    },
    textsyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.grey,
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    },
    textArrange2:{
        fontSize: constants.vw(12),
        fontWeight:'500',
        fontStyle:'normal',
        color: constants.Colors.darkBlue,
        marginTop:12,
        alignItems:'center',
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    }
});

const mapStateToProps=(state)=>({
    
    emailId:state.Onboarding.emailId,

})

const mapDispatchToProps = {
    setEmailId:(val)=>setEmailId(val)

}

export default connect(mapStateToProps,mapDispatchToProps)(EmailIdScreen)

