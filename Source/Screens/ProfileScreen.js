import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';
import constants from '../constants';
import ReusableProfileHeader from '../Components/ReusableProfileHeader';
import ReusableOptions from '../Components/ReusableOptions';



export default class ProfileScreen extends React.Component{
    Data=[
        {
            Image: constants.Image.bank_amc,
            name:'Your Accounts',
            description:'Manage your bank accounts',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('YourAccountScreen')}
        },
        {
            Image: constants.Image.transaction,
            name:'My Transactions',
            description:'Check your orders and transactions',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('MyTransactionScreen')}
        },
        {
            Image:constants.Image.bookmarks,
            name:'Bookmarks',
            description:'Your saved items',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('BookmarkScreen')}
        },
        {
            Image:constants.Image.term_cond,
            name:'Terms and Conditions',
            description:'Go through the legal agreements ',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('MyTransactionScreen')}
        },
        {
            Image:constants.Image.Privacy,
            name:'Privacy Policy',
            description:'All legal documents about your data ',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('MyTransactionScreen')}
        },
        {
            Image:constants.Image.FAQ,
            name:'FAQ',
            description:'Need help with services?',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('MyTransactionScreen')}
        },
        {
            Image:constants.Image.Help,
            name:'Contact Us',
            ArrowImage: constants.Image.rightarrow,
            onClick:()=>{this.props.navigation.navigate('ContactUsModal')}
        },
    ]
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ReusableProfileHeader
                    name={'Profile'}
                    navigation={this.props.navigation}
                />
                <View style={styles.lineStyle}></View>
                <View style={styles.QRcodeArrange}>
                    <View style={styles.circleStyle}></View>
                    <View >
                        <Text style={styles.nameStyle}>Mahesh Srishar</Text>
                        <Text style={styles.numStyle}>+91 79040869797</Text>
                    </View>
                </View>
                <Image source={require('../../Assets/QRcode.png') } style={styles.QRcodeSize}/>

                <View style={styles.lineThikStyle}></View>

                <FlatList
                    
                    data={this.Data}
                    renderItem={(val)=>{
                        const item=val.item

                        return(
                            <ReusableOptions
                                image={item.Image}
                                name={item.name}   
                                description={item.description} 
                                ArrowImage={item.ArrowImage}
                                onClick={item.onClick}
                                contentcontainerStyle={styles.iconArrange}
                                cond={item[6]}
                               
                                
                            />
                            
                        )
                    }}

                />
            </SafeAreaView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
    },
    lineStyle:{
        width:"100%",
        height:0.4,
        backgroundColor: constants.Colors.darkGrey,
        marginTop:20
    },
    circleStyle:{
        width: constants.vw(48),
        height: constants.vh(48),
        borderRadius: constants.vw(48/2),
        backgroundColor: constants.Colors.darkGrey,
    },
    nameStyle:{
        fontSize: constants.vw(18),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-SemiBold'
    },
    
    numStyle:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
    },
    QRcodeSize:{
        width: constants.vw(32),
        height: constants.vh(31.42),
        position:'absolute',
        right:'0%',
        left:'88.24%',
        top:'15%',
        bottom:'17.94%'

    },
    QRcodeArrange:{
        width: constants.vw(190),
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: constants.vh(15),
        alignItems:'center',
        marginLeft: constants.vw(20),
        //backgroundColor:'red'
    },
    lineThikStyle:{
        width:'100%',
        height: constants.vh(8),
        backgroundColor:'#F9FAFC',
        marginTop: constants.vh(15)
    },
    iconArrange:{
        marginLeft: constants.vw(20),
    },
    
})