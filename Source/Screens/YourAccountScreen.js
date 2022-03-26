import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';


import ReusableProfileHeader from '../Components/ReusableProfileHeader';
import ReusableAccountCard from '../Components/ReusableAccountCard';
import constants from '../constants';


const DATA=[
    {
        Image: constants.Image.sucobank,
        name:'Suco Bank 8604',
        AccountType:'Current Account',
        Price:'₹67,900',
    },
    {
        Image: constants.Image.HDFC,
        name:'HDFC Bank 4683',
        AccountType:'Savings Account',
        Price:'₹45,848',
    },
    {
        Image: constants.Image.ICICI,
        name:'ICICI Bank 2595',
        AccountType:'Savings Account',
        Price:'₹29,456',
    },
]

export default class YourAccountScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ReusableProfileHeader
                    name={"Your Account"}
                    navigation={this.props.navigation}
                />
                <View style={styles.lineStyle}></View>
                
                <FlatList
                    data={DATA}
                    renderItem={(val)=>{
                        const item=val.item
                        return(
                            <ReusableAccountCard
                                image={item.Image}
                                name={item.name}
                                AccountType={item.AccountType}
                                Price={item.Price}
                                contentContainerStyle={styles.cardStyle}
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
        backgroundColor:'#E5E5E5',
    },
    lineStyle:{
        width:"100%",
        height:0.4,
        backgroundColor: constants.Colors.darkGrey,
        marginTop: constants.vh(20)
    },
    cardStyle:{
        marginTop: constants.vh(20),
        marginLeft: constants.vw(30)
    }

});