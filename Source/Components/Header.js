import React from 'react';
import { 
    Button, View , Text, 
    TextInput,StyleSheet,TouchableOpacity,
    Image,SafeAreaView,ScrollView
} from'react-native';
import constants from '../constants';


export default class Header extends React.Component {
    render(){
        return(
            <View >
                <View style={styles.imageArrangement}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                        <Image source={constants.Image.Vector_arrow} style={styles.iamgeStyle}/>
                    </TouchableOpacity>
                    <Image source={constants.Image.Vector} style={styles.iamgeStyle}/>
                </View>
                <View style={styles.linestyle}></View>
            </View>
        )
    }
}



const styles=StyleSheet.create({

    
    iamgeStyle:{
        width: constants.vw(15),
        height: constants.vh(15)
    },
    imageArrangement:{
        width: constants.vw(375),
        height: constants.vh(30),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:constants.vw(20),
        //backgroundColor:'red',
        alignItems:'center',
        marginTop: constants.vh(10)

    },
    linestyle:{
        width:'100%',
        height:0.4,
        backgroundColor: constants.Colors.grey,
        marginTop: constants.vh(20)
    },

})