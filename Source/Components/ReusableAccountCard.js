import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';
import constants from '../constants';


export default class ReusableAccountCard extends React.Component{
    render(){
        return(
            <View >
                <View style={{...styles.container,...this.props.contentContainerStyle}}>
                    <View style={styles.cardStyle}>
                        <View style={styles.iconArrange}>
                            <Image source={this.props.image}/>
                            <View style={styles.textBox}>
                                <Text style={styles.nameStyle}>{this.props.name}</Text>
                                <Text style={styles.accountTypeStyle}>{this.props.AccountType}</Text>
                            </View>
                        </View>
                        <Text style={styles.priceStyle}>{this.props.Price}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width: constants.vw(328),
        height: constants.vh(84),
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius: constants.vw(16),
        
    },
    cardStyle:{
        // marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: constants.vw(15)
        
    },
    iconArrange:{
        flexDirection:'row',
        justifyContent:'space-between'
       
       
    },
    textBox:{
        //width:100,
         //backgroundColor:'red',
         marginLeft: constants.vw(8),
         justifyContent:'space-between'
    },
    nameStyle:{
        fontSize: constants.vw(14),
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-Medium'
    },
    accountTypeStyle:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.darkGrey,
    },
    priceStyle:{
        fontSize: constants.vw(14),
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-SemiBold'
    },
    
    


})