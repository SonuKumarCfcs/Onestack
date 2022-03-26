import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Header from '../Components/Header';
import ReusableButton from '../Components/ReusableButton';


export default class PhotographScreen extends React.Component {

state={
    image:null,
}

    takeImage=()=>{
        ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: true,
            includeExif: true,
            mediaType: 'photo',
          }).then((image) => {
            console.log("Image clicked",image);
            this.setState({
                image:image.path, 
                 // uri: image.path,
                //   width: image.width,
                //   height: image.height,
                //   mime: image.mime,
                
               
              });
            });
    }
    render(){
        return(
            
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <Text style={styles.textStyle}>Take Photo</Text>
                    <View style={styles.box1}>
                        <View style={styles.box2}>
                           <Image source={{uri: this.state.image}} style={styles.imageStyle}/> 
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle1}>Align your face in the circle and tap the button</Text>
                    <Text style={styles.textStyle1}>given below</Text>
                    <Text style={styles.textStyle2}>Make sure your surroundings are bright & quite</Text>
                    
                </View>
                <View style={styles.buttonArr}>
                    <ReusableButton    
                        buttonName={"Take Photo"}
                        onClick={()=>{this.takeImage()}}
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
        justifyContent:'center',
        alignItems:'center',
    },
    box2:{
        width:283,
        height:283,
        borderWidth:1,
        borderColor:'#003C92',
        backgroundColor:'white',
        borderRadius:283/2
    },
    imageStyle:{
        width:283,
        height:283,
        borderRadius:283/2
    },
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
    }
})