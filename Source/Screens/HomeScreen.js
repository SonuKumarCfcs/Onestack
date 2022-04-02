import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';

import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';


export  default class HomeScreen extends React.Component {

    render(){
      return(
        <SafeAreaView style={styles.container}>
          <Image source={constants.Image.Logo} style={styles.logoSize}/>
          <View style={styles.linestyle}></View>
          <View>
            <Image source={constants.Image.Finance} style={styles.imageSize}/>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textstyle}>Banking Reimagined</Text>
          </View>
  
          <View style={{marginTop:8}}>
            <Text style={styles.textColor}>Save,Borrow,spend & Grow your money,</Text> 
          </View>
          <View style={{marginTop:5}}>
            <Text style={styles.textColor}>without leaving your bank!</Text>
          </View>
          <View style={styles.linestyle1}></View>
          <ReusableButton
            buttonName={"Get Started"}
            onClick={()=>{this.props.navigation.navigate('ApiDataScreen')}}
          />
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
    imageSize:{
      width: constants.vw(360),
      height: constants.vh(286),
      marginTop: constants.vh(110)
    },
    textstyle:{
      fontSize: constants.vw(24),
      fontWeight:'600',
      fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textBox:{
      width: constants.vw(229),
      height: constants.vh(32),
      marginTop: constants.vh(70)
    },
    textColor:{
      color: constants.Colors.grey,
      fontSize: constants.vw(12),
      fontFamily: constants.Fonts.OpenSans_Regular
    },
    logoSize:{
      width: constants.vw(100),
      height: constants.vh(22),
      marginTop: constants.vh(20)
    },
    linestyle:{
      width:'100%',
      height:0.4,
      backgroundColor: constants.Colors.grey,
      marginTop:20
    },
    linestyle1:{
      width:'100%',
      height: constants.vh(0.4),
      backgroundColor:constants.Colors.grey,
      marginTop: constants.vh(52)
    },
  });