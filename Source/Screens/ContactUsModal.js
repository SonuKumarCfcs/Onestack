import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';

import ReusableButton from '../Components/ReusableButton';

export default class ContactUsModal extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.container1}    
                    onPress={()=>{this.props.navigation.pop()}}               
                />
                <View style={styles.boxStyle}>
                   <Image source={require('../../Assets/message.png')} style={styles.imageSize}/> 
                   <View style={styles.textArrange}>
                       <Text style={styles.contactStyle}>Contact Us</Text>
                       <Text style={styles.descrpStyle}>For more help or information mail and contact us on</Text>
                       <Text style={styles.mailStyle}>support@onestack.in</Text>
                   </View>
                   <ReusableButton 
                    buttonName={'Contact Us'}
                    contentcontainerStyle={styles.buttonStyle}
                   />

                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'rgba(0,0,0,0.2)',
    },
    container1:{
        flex:1,
       
    },
    boxStyle:{
        width:"100%",
        height:200,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor:'white',
    },
    imageSize:{
        width:40,
        height:40,
        marginLeft:15,
        marginTop:15
    },
    contactStyle:{
        fontSize:16,
        fontWeight:'600',
        fontStyle:'normal',
        color:'#000000',
    },
    descrpStyle:{
        fontSize:12,
        fontWeight:'400',
        fontStyle:'normal',
        color:'rgba(0, 0, 0, 0.6)',
    },
    mailStyle:{
        fontSize:12,
        fontWeight:'500',
        fontStyle:'normal',
        color:'#003C92',
    },
    textArrange:{
        marginLeft:15
    },
    buttonStyle:{
        marginLeft:32,
       
    }


})