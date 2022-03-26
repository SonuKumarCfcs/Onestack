import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';

import ReusableProfileHeader from '../Components/ReusableProfileHeader';
import ReusableOptions from '../Components/ReusableOptions';

const Data=[
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Mobile Bill Paid',
        date:'02 Jul 21, 03:44 PM',
        Amount:'- ₹ 158',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Received from Keerthana',
        date:'20 Jul 21, 05:44 PM',
        Amount:'- ₹ 150',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Electricity Bill Paid',
        date:'29 Jun’ 21, 11:29 AM',
        Amount:'- ₹ 2558',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Paid to Aditya Birla Fund',
        date:'13 Jun’ 21, 11:40 PM',
        Amount:'+ ₹ 458',
        sign:'+'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Paid To Riskcovery',
        date:'9 Jun’ 21, 10:29 AM',
        Amount:'- ₹ 10000',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Paid to Aditya  ',
        date:'20 May 21, 11:29 AM',
        Amount:'+ ₹ 308',
        sign:'+'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Received from Sheena',
        date:'29 May 21, 11:29 AM',
        Amount:'- ₹ 308',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Mobile Bill Paid',
        date:'02 Jul 21, 03:44 PM',
        Amount:'+ ₹ 2560',
        sign:'+'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Electricity Bill Paid',
        date:'02 Jul 21, 03:44 PM',
        Amount:'- ₹ 158',
        sign:'-'
    },
    {
        Image:require('../../Assets/Airtel.png'),
        name:'Mobile Bill Paid',
        date:'02 Jul 21, 03:44 PM',
        Amount:'- ₹ 158',
        sign:'-'
    },
]


export default class MyTransactionScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ReusableProfileHeader
                    name={"My Transactions"}
                    navigation={this.props.navigation}
                    image={require('../../Assets/Filter.png')}
                
                />
                <View style={styles.lineThikStyle}></View>
                <FlatList
                    
                    data={Data}
                    renderItem={(val)=>{
                        const item=val.item

                        return(
                            <ReusableOptions
                                image={item.Image}
                                name={item.name}   
                                description={item.date} 
                                Amount={item.Amount}
                                sign={item.sign}
                                contentcontainerStyle={styles.iconArrange}
                                onClick={()=>{this.props.navigation.navigate('MyTransactionScreen')}}
                                
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
        backgroundColor:'white',
    },
    lineThikStyle:{
        width:'100%',
        height:8,
        backgroundColor:'#F9FAFC',
        marginTop:15
    },
    iconArrange:{
        marginLeft:20,
    },
})