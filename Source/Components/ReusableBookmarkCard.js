import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';



export default class ReusableBookmarkCard extends React.Component{
    render(){
        return(
            <View style={{...styles.cardContainer,...this.props.contentcontainerStyle}}>
                <View style={styles.imageArrange}>
                    <Image source={this.props.image}/>
                    <View style={styles.textboxStyle}>
                        <Text style={styles.textstyle}>{this.props.name}</Text>
                    </View>
                </View>
                <View style={styles.thinline}></View>
                <View style={styles.textArrange}>
                    <Text style={styles.textLstyle}>{this.props.invest}</Text>
                    <Text style={styles.textLstyle}>{this.props.risk}</Text>
                    <Text style={styles.textLstyle}>{this.props.return}</Text>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    cardContainer:{
        width:328,
        height:150,
        borderRadius:16,
        borderWidth:0.4,
        borderColor:'grey',
        padding:20,
        //alignItems:'center',
        // justifyContent:'center',
        

    },
    textboxStyle:{
        width:244,
        height:44,marginLeft:15,
        justifyContent:'center',
    },
    thinline:{
        width:'99%',
        height:0.4,
        backgroundColor:'grey',
        marginTop:15
    },
    imageArrange:{
        flexDirection:'row',
        justifyContent:'space-between'
        //alignItems:'center',
        //backgroundColor:'red'
    },
    textstyle:{
        fontSize:14,
        fontWeight:'400',
        fontStyle:'normal',
        color:'#000000'
    },
    textLstyle:{
        fontSize:12,
        fontWeight:'400',
        fontStyle:'normal',
        color:'#00000099'
    },
    textArrange:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})