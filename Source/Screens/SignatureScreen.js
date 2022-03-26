import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';


import Header from '../Components/Header';
import ReusableButton from '../Components/ReusableButton';
import constants from '../constants';
import ImagePicker from 'react-native-image-crop-picker';



export default class SignatureScreen extends React.Component {

    state ={
        image : null,
        vedio:null,
    }
    takeSignatureImage=()=>{
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
                    <Text style={styles.textStyle}>Signature</Text>
                    <View style={styles.box1}>
                        <Image source={{uri : this.state.image}} style={styles.imageStyle} />
                    </View>
                </ScrollView>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle1}>Sign in the frame provided above and tap on the</Text>
                    <Text style={styles.textStyle1}>Updoald button</Text>
                    <Text style={styles.textStyle2}>Make sure signature is clear</Text>
                </View>
                <View style={styles.buttonArr}>
                    <ReusableButton
                            
                        buttonName={"Upload"}
                        onClick={()=>{this.takeSignatureImage()}}
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
        width:340,
        height:427,
        backgroundColor:'#0000000A',
        borderRadius:16,
        marginLeft:20,
        marginTop:20,
        borderWidth:1,
        borderColor:'#003C92',
        justifyContent:'center',
        alignItems:'center',
    },
    imageStyle:{
        width: constants.vw(340),
        height: constants.vh(427),
        borderRadius: constants.vw(16)
    },
    // box2:{
    //     width:283,
    //     height:176,
    //     backgroundColor:'white',
    //     borderRadius:10
    // },
    textStyle:{
        fontSize:24,
        fontStyle:'normal',
        fontWeight:'600',
        color:'#18191F',
        marginTop:10,
        marginLeft:20,
        fontFamily:'IBMPlexSans-SemiBold'
    },
    textStyle1:{
        fontSize:14,
        fontStyle:'normal',
        fontWeight:'500',
        color:'#000000CC',
        
    },
    textStyle2:{
        fontSize:12,
        fontStyle:'normal',
        fontWeight:'400',
        color:'#00000052',
       
    },
    textArr:{
        alignItems:'center'
    },
    buttonArr:{
        alignItems:'center'
    },
    
})