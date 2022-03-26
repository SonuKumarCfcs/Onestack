import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import constants from '../constants';

export default class ReusableHeader extends React.Component{
    render(){
        return(
           <View>
               <View style={styles.imageArrangement}>
                     <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}> 
                        <Image source={constants.Image.Vector_arrow} style={styles.iamgeStyle}/>
                    </TouchableOpacity>
                    <Image source={constants.Image.Vector} style={styles.iamgeStyle}/>
                </View>
                <View style={styles.boxArrange}>
                    <Text style={styles.textStyle1}>STEP 1 of 3</Text>
                    <Text style={styles.textStyle2}>Verify your identity</Text>
                    <View style={styles.rectArrange}>
                        <View style={styles.rectStyle}></View>
                        <View style={styles.rectemptyStyle}></View>
                        <View style={styles.rectemptyStyle}></View>
                    </View>
                </View>
                <View style={styles.linestyle}></View>
           </View>  
        )
    }
}


const styles=StyleSheet.create({
    linestyle:{
        width: constants.vw(390),
        height: 0.4,
        backgroundColor: constants.Colors.grey,
        marginTop: constants.vh(24),
    
    },
    iamgeStyle:{
        width: constants.vw(15),
        height: constants.vh(15),
    },
    imageArrangement:{
        width: constants.vw(375),
        height: constants.vh(30),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vh(20),
        //backgroundColor:'red',
        alignItems:'center',
        marginTop:10

    },
    textStyle1:{
        fontStyle:'normal',
        fontWeight:'500',
        color: constants.Colors.grey,
        fontSize: constants.vw(10),
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    },
    textStyle2:{
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        fontSize: constants.vw(18),
        marginTop:8,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    rectStyle:{
        width: constants.vw(110),
        height:4,
        borderRadius: constants.vw(100),
        backgroundColor: constants.Colors.darkBlue,
    },
    rectemptyStyle:{
        width: constants.vw(108),
        height:4,
        borderRadius: constants.vw(100),
        backgroundColor:'#0000000F'
    },
    rectArrange:{
        width: constants.vw(333),
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:14,
       

    },
    boxArrange:{
        marginHorizontal:20,
        marginTop:10
    }
    
});