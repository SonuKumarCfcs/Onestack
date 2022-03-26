import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';
import constants from '../constants';


export default class ReusableProfileHeader extends React.Component{
    render(){
        return(
            <View >
                <View style={styles.HeaderArrange}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                        <Image source={constants.Image.Vector_arrow} style={styles.imageSize}/>
                    </TouchableOpacity>
                    <View style={styles.nameBox}>
                        <Text style={styles.nameStyle}>{this.props.name}</Text>
                    </View>
                </View>
                <Image source={this.props.image} style={styles.filterStyle}/>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    HeaderArrange:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: constants.vw(70),
       // backgroundColor:'red',
        alignItems:'center',
        marginLeft: constants.vw(20)
        

    },
    imageSize:{
        width: constants.vw(8.21),
        height: constants.vh(15),
    },
    nameStyle:{
        fontSize: constants.vw(16),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-SemiBold'
       
    },
    nameBox:{
        width: constants.vw(130),
        marginLeft: constants.vw(10),
        //backgroundColor:'red',
    },
    filterStyle:{
        width: constants.vw(19.68),
        height: constants.vh(15.83),
        position:'absolute',
        top:'50%',
        right:'5%'
    }
})