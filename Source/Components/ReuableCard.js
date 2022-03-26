import React from 'react';
import { Button, View , Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableCard extends React.Component {
    render(){
        return(
            <View style={styles.cardStyle}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DigitalKYCScreen")}}>
                    <View style={styles.imageArr}>
                        <Image source={this.props.image} style={styles.imageStyle}/>
                        <View style={styles.textBox}>
                            <Text style={styles.textStyle1}>{this.props.name}</Text>
                            <Text style={styles.textStyle2}>{this.props.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles=StyleSheet.create({
     
    cardStyle:{
        width: constants.vw(328),
        height: constants.vh(88),
        borderWidth:0.4,
        borderRadius: constants.vw(8),
        marginTop: constants.vh(10),
        alignItems:'center',
        justifyContent:'center'
        
    },
    textStyle1:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-Medium'
    },
    textStyle2:{
        fontSize: constants.vw(10),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.darkGrey,
    },
    imageStyle:{
        width: constants.vw(40),
        height:constants.vh(40),
    },
    imageArr:{
        flexDirection:'row',
        // backgroundColor:'red',
       
       
    },
    textBox:{
        width: constants.vw(248),
        height: constants.vh(32),
        marginLeft: constants.vw(8),
    }


});
