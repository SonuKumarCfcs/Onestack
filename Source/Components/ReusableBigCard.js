import React from 'react';
import { Button, View , Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableBigCard extends React.Component {
    render(){
        return(
            <View style={styles.cardStyle}>
                <View style={styles.imageArr}>
                    <Image source={this.props.image} style={styles.imageSize}/>
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle3}>{this.props.side}</Text>
                    </View>
                </View>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle4}>{this.props.name}</Text>
                    <Text style={styles.textStyle5}>{this.props.description}</Text>
                </View>
                <TouchableOpacity onPress={()=>{this.props.onUpload()}}>
                <Text style={styles.textStyle1}>{this.props.uploadButton}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles=StyleSheet.create({
     
    cardStyle:{
        width: constants.vw(340),
        height: constants.vh(182),
        borderWidth:0.4,
        borderRadius: constants.vw(8),
        marginTop: constants.vh(16),
        
        
    },
    textStyle1:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'600',
        color:  constants.Colors.darkBlue,
        marginTop: constants.vh(20),
        marginHorizontal: constants.vw(20),
        fontFamily:'IBMPlexSans-SemiBold'

    },
    // textBox:{
    //     width:248,
    //     height:32,
    //     marginLeft:8,
    // },
    textBox:{
        width: constants.vw(87),
        height: constants.vh(24),
        borderRadius:4,
        backgroundColor: constants.Colors.lightGrey,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle3:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'500',
        color:  constants.Colors.black,
        fontFamily:'IBMPlexSans-Medium'
    },
    imageSize:{
        width: constants.vw(40),
        height: constants.vh(40),
    },
    imageArr:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: constants.vh(15),
        paddingHorizontal: constants.vw(20)

    },
    textStyle4:{
        fontSize: constants.vw(14),
        fontStyle:'normal',
        fontWeight:'500',
        color:  constants.Colors.black,
        marginTop:8,
        fontFamily:'IBMPlexSans-Medium'
    },
    textStyle5:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color:  constants.Colors.grey,
        marginTop:8,
    },
    textArr:{
        marginHorizontal:constants.vw(20),
    }



});
