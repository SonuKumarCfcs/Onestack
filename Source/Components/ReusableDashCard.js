import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


export default class ReusableDashCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageArr}>
                    <Image source={this.props.image}  style={styles.iamgeSize}/>
                    <View>
                        <Text style={styles.textStyle1}>{this.props.text1}</Text>
                        <Text style={styles.textStyle2}>{this.props.text2}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width: constants.vw(156),
        height: constants.vh(66),
        borderRadius: constants.vw(16),
        borderWidth:1,
        borderColor: constants.Colors.lightGrey,
        backgroundColor:'#F9FAFC',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft: constants.vw(10)
    },
        iamgeSize:{
            width: constants.vw(32),
            height: constants.vh(32),
        },
        textStyle1:{
            fontSize: constants.vw(14),
            fontWeight:'400',
            fontStyle:'normal',
            color: constants.Colors.darkGrey,
            marginLeft: constants.vw(8)
        },
        textStyle2:{
            fontSize: constants.vw(16),
            fontWeight:'600',
            fontStyle:'normal',
            color: constants.Colors.black,
            marginLeft: constants.vw(8),
            fontFamily: constants.Fonts.IBMPlexSans_SemiBold, 
        },
        imageArr:{
            flexDirection:'row', 
        }
    
});