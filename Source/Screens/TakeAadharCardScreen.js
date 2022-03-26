import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';


import Header from '../Components/Header';
import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';
import ImagePicker from 'react-native-image-crop-picker';


export default class TakeAadharCardScreen extends React.Component {
    state ={
        image : null,
    }
    takeAadharImage=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                image:image.path,
            })
        });
    }
    render(){
        return(
            
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <Text style={styles.textStyle}>Aadhaar Card</Text>
                    <View style={styles.box1}>
                        <View style={styles.box2}>
                            <Image source={{uri : this.state.image}} style={styles.imageStyle} />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle1}>Take a photo of your Aadhaar Card</Text>
                    <Text style={styles.textStyle2}>Place Aadhaar in the frame provide above. Make sure the image</Text>
                    <Text style={styles.textStyle2}>is clear and not blurred.</Text>
                </View>
                <View style={styles.buttonArr}>
                    <ReusableButton
                            
                            buttonName={"Take Photo"}
                            onClick={()=>{this.takeAadharImage()}}
                    />
                </View>
                {/* this.props.navigation.navigate("DigitalKYCScreen") */}
            </SafeAreaView>


        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
       

    },
    box1:{
        width: constants.vw(340),
        height: constants.vh(427),
        backgroundColor:'#0000000A',
        borderRadius: constants.vw(16),
        marginLeft: constants.vw(20),
        marginTop: constants.vh(20),
        justifyContent:'center',
        alignItems:'center',
    },
    box2:{
        width: constants.vw(283),
        height: constants.vh(176),
        backgroundColor:'white',
        borderRadius: constants.vw(10)
    },
    imageStyle:{
        width: constants.vw(283),
        height: constants.vh(176),
        borderRadius: constants.vw(10)
    },
    textStyle:{
        fontSize: constants.vw(24),
        fontStyle:'normal',
        fontWeight:'600',
        color:'#18191F',
        marginTop:constants.vh(10),
        marginLeft: constants.vw(20),
        fontFamily:'IBMPlexSans-SemiBold'
    },
    textStyle1:{
        fontSize: constants.vw(14),
        fontStyle:'normal',
        fontWeight:'500',
        color:'#000000CC',
        
    },
    textStyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color:'#00000052',
       
    },
    textArr:{
        alignItems:'center'
    },
    buttonArr:{
        alignItems:'center'
    }
})