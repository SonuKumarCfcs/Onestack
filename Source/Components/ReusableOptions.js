import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';
import constants from '../constants';


export default class ReusableOptions extends React.Component{
    render(){
        
        return(
            <View style={this.props.contentcontainerStyle}>
                <TouchableOpacity 
                    style={styles.HeaderArrange}
                    onPress={()=>{this.props.onClick()}}
                >
                    <Image source={this.props.image} style={styles.imageSize}/>
                    <View style={styles.textArrange}>
                        <Text style={{...styles.nameStyle,color:this.props.name!="Contact Us" ?'#000000':'#003C92',}}>{this.props.name}</Text>
                        <Text style={styles.descriptionStyle}>{this.props.description}</Text>
                    </View>
                
                </TouchableOpacity>
                <Text style={{...styles.AmountArrange,color:this.props.sign=='+' ? '#018957':'#000000',}}>{this.props.Amount}</Text>
                {/* <Text style={{...styles.signArrange,color:this.props.sign=='+' ? '#018957':'#000000',}}>{this.props.sign}</Text> */}
                <Image source={this.props.ArrowImage} style={styles.ArrowStyle}/>
               
                {this.props.name!='Contact Us' ? (<View style={styles.thinline}></View>) : null}
            </View>
        )
    }
}
//console.log("Name==>>",this.name)


const styles=StyleSheet.create({
    HeaderArrange:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: constants.vw(220),
        //backgroundColor:'red',
        alignItems:'center',
        //marginLeft:20,
        marginTop: constants.vh(10)
        

    },
    imageSize:{
        width: constants.vw(30),
        height: constants.vh(30),
    },
    nameStyle:{
        fontSize: constants.vw(14),
        fontWeight:'500',
        fontStyle:'normal',
        fontFamily:constants.Fonts.IBMPlexSans_Medium, 
        
    },
    descriptionStyle:{
        fontSize: constants.vw(10),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
    },
    thinline:{
        width:'95%',
        height:0.4,
        backgroundColor: constants.Colors.darkGrey,
        marginTop: constants.vh(10)
    },
    ArrowStyle:{
        width: constants.vw(6.57),
        height: constants.vh(12),
        position:'absolute',
        left:'90%',
        right:'0%',
        top:'40%',
        
       
    },
    textArrange:{
        width: constants.vw(256),
        height: constants.vh(40),
        marginLeft: constants.vw(15),
        justifyContent:'center',
    },
    AmountArrange:{
        position:'absolute',
        right:'9%',
        top:'37%',
        fontSize: constants.vw(18),
        fontWeight:'600',
        fontStyle:'normal',
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
        // color:'#000000',
    },
//    signArrange:{
//         position:'absolute',
//         right:'29%',
//         top:'37%',
//         fontSize:18,
//         fontWeight:'600',
//         fontStyle:'normal',
        
//     }
    

})