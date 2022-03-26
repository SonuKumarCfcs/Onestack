import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView, ScrollView} from'react-native';


import Reusableheader from '../Components/Reusable_header';
import ReusableBigCard from '../Components/ReusableBigCard';
import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';

export default class DigitalKYCScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Reusableheader  navigation={this.props.navigation}/>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View style={styles.textArr}>
                        <Text style={styles.textsyle1}>Digital KYC</Text>
                        <Text style={styles.textsyle2}>We request you to keep the following documents handy</Text>
                    </View>
                    <View style={styles.cardArr}>
                        <ReusableBigCard
                            image={require('../../Assets/Pan.png')}
                            side={'Front'}
                            name={"PAN Card"}
                            description={"Please ensure that the PAN is digitally signed and the image is clear and not blurred"}
                            uploadButton={'Upload'}
                            onUpload={()=>{
                                this.props.navigation.navigate('TakePANCardScreen')
                            }}
                        />
                        <ReusableBigCard
                            image={require('../../Assets/Location.png')}
                            side={'Front & Back'}
                            name={"Proof of Address"}
                            description={"Please ensure that the image is clear and not blurred."}
                            uploadButton={'Upload'}
                            onUpload={()=>{
                                this.props.navigation.navigate('TakeAadharCardScreen')
                            }}
                        />
                        <ReusableBigCard
                            image={require('../../Assets/ClickPhoto.png')}
                            side={'Live Capture'}
                            name={"Click your Photo"}
                            description={"Please ensure that the photo is clear and has a well lit background"}
                            uploadButton={'Upload'}
                            onUpload={()=>{
                                this.props.navigation.navigate('PhotographScreen')
                            }}
                        />
                        <ReusableBigCard
                            image={require('../../Assets/Signature.png')}
                            side={'Scanned'}
                            name={"Your Signature"}
                            description={"Please ensure that the Signature is on plain sheet and scanned properly "}
                            uploadButton={'Upload'}
                            onUpload={()=>{
                                this.props.navigation.navigate('SignatureScreen')
                            }}
                        />
        
                    </View>
                </ScrollView>
                <View style={styles.linestyle1}>
                </View>
                <View style={styles.buttonArr}>
                    <ReusableButton
                            
                            buttonName={"Next"}
                            onClick={()=>{this.props.navigation.navigate("PersonalDetailScreen")}}
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
    textsyle1:{
        fontSize: constants.vw(16),
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        marginTop: constants.vh(15),
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textsyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.grey,
        marginTop:5,
    },
    textArr:{
       
        marginLeft: constants.vw(20),
    },
    cardArr:{
        alignItems:'center',
    },
    linestyle1:{
        width:'100%',
        height:0.4,
        backgroundColor: constants.Colors.grey,
       
      },
      buttonArr:{
          alignItems:'center'
      }
});