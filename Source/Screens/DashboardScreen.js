import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';
import constants from '../constants';
import ReusableDashCard from '../Components/ReusableDashCard';
import ReusableData from '../Components/ReusableData';
import ReusableIcons from '../Components/ReusableIcons';
import ReusableInvestCard from '../Components/ReusableInvestCard';
import ReusableFeatureService from '../Components/ReusableFeatureService';


// const Data_Transaction=[
//     {
//         Image:,
//         title:,
//         date_time:,
//         Amount:132
//     }
// ]

export default class DashboardScreen extends React.Component{
    
    Data_Icons=[
        {
            Image: constants.Image.mobile,
            name:"Mobile",
        },
        {
            Image: constants.Image.creditCard,
            name:"Credit Card",
        },
        {
            Image: constants.Image.Electricity,
            name:"Electricity",
        },
        {
            Image: constants.Image.Gas,
            name:"Gas",
        },
        {
            Image: constants.Image.DTH,
            name:"DTH",
        },
        {
            Image: constants.Image.landline,
            name:"Landline",
        },
        {
            Image: constants.Image.broadband,
            name:"Broadband",
        },
        {
            Image: constants.Image.view_All,
            name:"All services",
        },
    
    ]

    Data_Invest=[
        {
            name:'Mutual Fund',
            Value:'₹ 0',
            Image: constants.Image.MutualFund,
        },
        {
            name:'Gold',
            Value:'₹ 0',
            Image: constants.Image.Gold,
        },   {
            name:'Real Estate',
            Value:'₹ 0',
            Image: constants.Image.RealEstate,
        },   {
            name:'PFF',
            Value:'₹ 0',
            Image: constants.Image.PFF,
        },  
    ]

    Data_Insurance=[
        {
            name:'Health Insurance',
            Value:'₹ 0',
            Image: constants.Image.Health,
        },
        {
            name:'Term Insurance',
            Value:'₹ 0',
            Image: constants.Image.Term,
        },   {
            name:'Car Insurance',
            Value:'₹ 0',
            Image: constants.Image.Car,
        },   {
            name:'Bike Insurance',
            Value:'₹ 0',
            Image: constants.Image.Bike,
        },  
    ]
    
    Data_FeaturedService=[
        {
            Image: constants.Image.Health,
            name:'Health Insurance'
        },
        {
            Image: constants.Image.Term,
            name:'Term Insurance'
        },
        {
            Image: constants.Image.Car,
            name:'Car Insurance'
        },
        {
            Image: constants.Image.personalloan,
            name:'Personal Loan'
        },
        {
            Image: constants.Image.MutualFund,
            name:'Mutual Fund'
        },
        {
            Image: constants.Image.Gold,
            name:'Digital Gold'
        },
        
    ]
    render(){
        // console.log("Props==>>",this.props)
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.iconArr}>
                    <Image source={constants.Image.Logo} style={styles.logoSize}/>
                    <View style={styles.iconArr1}>
                        <Image source={constants.Image.Icon_notification} style={styles.iconSize}/>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}>
                            <Image source={constants.Image.Icon_profile} style={styles.iconSize}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <View style={styles.textArr}>
                        <View style={styles.infoArr}>
                            <Text style={styles.textStyle1}>Your Net Worth</Text>
                            <Image source={constants.Image.info} style={styles.infoSize}/>
                        </View>
                        <Text style={styles.textStyle2}>₹ 0</Text>
                    </View>

                    <View style={styles.cardArr}>
                        <ReusableDashCard
                            image={constants.Image.Icon_up}
                            text1={"What I Have"}
                            text2={"Add now"}
                        />

                        <ReusableDashCard
                            image={constants.Image.Icon_down}
                            text1={"What I Owe"}
                            text2={"Add now"}
                        />
                    </View>

                    <View style={styles.lineStyle}></View>

                    <View style={styles.textArr2}>
                        <Text style={styles.textStyle3}>Your Accounts</Text>
                        <Text style={styles.textStyle4}>View All</Text>
                    </View>

                   
                    <ReusableData 
                        image={constants.Image.MoneyTransfer}
                        text1={"Add your Accounts"}
                        text2={"Add and manage all your bank accounts easily"}
                        buttonName={"Add account"}
                        contentContainerStyle={styles.dataArr}
                    />
                    

                    <View style={styles.lineStyle}></View>

                    <Text style={styles.textStyle5}>Money Transfer</Text>
                    <View style={styles.iconArr2}>
                        <View style={styles.itemAlign}>
                            <Image source={constants.Image.QR}  style={styles.iconSize1}/>
                            <Text style={styles.textStyle6}>QR Code</Text>
                        </View>

                        <View style={styles.itemAlign}> 
                            <Image source={constants.Image.UPITransfer}  style={styles.iconSize1}/>
                            <Text style={styles.textStyle6}>UPI ID</Text>
                        </View>

                        <View style={styles.itemAlign}>
                            <Image source={constants.Image.BankTransfer}  style={styles.iconSize1}/>
                            <Text style={styles.textStyle6}>Bank Transfer</Text>
                        </View>
                    </View>

                    <View style={styles.lineStyle}></View>

                    <Text style={styles.textStyle5}>Bill Payments</Text>
                    <FlatList
                        nestedScrollEnabled={true}
                        numColumns={4}
                        data={this.Data_Icons}
                        renderItem={(val)=>{
                            const item=val.item

                            //console.log("ItemsName==>>",item.name)

                            return(
                               
                                   <ReusableIcons 
                                        image={item.Image}
                                        text1={item.name}
                                        contentContainerStyle={styles.iconStyle}    
                                   />      
                        
                            )
                        }}

                    />

                    <View style={styles.lineStyle}></View>

                    <ReusableData 
                        image={constants.Image.MoneyTransfer}
                        text1={"Add your Accounts"}
                        text2={"Add and manage all your bank accounts easily"}
                        buttonName={"Add account"}
                        contentContainerStyle={styles.dataArr}
                    />

                    <View style={styles.lineStyle}></View>
                    
                    <View style={styles.textArr2}>
                        <Text style={styles.textStyle3}>My Investments</Text>
                        <Text style={styles.textStyle4}>Add Investment</Text>
                    </View>

                   
                    <FlatList
                        nestedScrollEnabled={true}
                        numColumns={2}
                        data={this.Data_Invest}
                        renderItem={(val)=>{
                            const item=val.item

                            //console.log("Items==>>",val)

                            return(
                                <View style={{paddingHorizontal:20}}>
                                   <ReusableInvestCard 
                                        image={item.Image}
                                        text1={item.name}
                                        text2={item.Value}
                                   />      
                                </View>
                            )
                        }}

                    />
                    <View style={styles.lineStyle}></View>

                    <View style={styles.textArr2}>
                        <Text style={styles.textStyle3}>My Insurances</Text>
                        <Text style={styles.textStyle4}>Add Insurance</Text>
                    </View>

                    
                    <FlatList
                        nestedScrollEnabled={true}
                        numColumns={2}
                        data={this.Data_Insurance}
                        renderItem={(val)=>{
                            const item=val.item
                                
                            return(
                               <View style={{paddingHorizontal:20}}>
                                <ReusableInvestCard 
                                    image={item.Image}
                                    text1={item.name}
                                    text2={item.Value}
                                />

                               </View>
                            )
                        }}

                    />
                    <View style={styles.lineStyle}></View>
                    
                    <ReusableData 
                        image={constants.Image.MoneyTransfer}
                        text1={"Add your Accounts"}
                        text2={"Add and manage all your bank accounts easily"}
                        buttonName={"Add account"}
                        contentContainerStyle={styles.dataArr}
                    />

                    <View style={styles.lineStyle}></View>

                    <View style={styles.textArr2}>
                        <Text style={styles.textStyle3}>Featured Services</Text>
                        <Text style={styles.textStyle4}>View All</Text>
                    </View>
                        
                    <FlatList
                        nestedScrollEnabled={true}
                        numColumns={2}
                        data={this.Data_FeaturedService}
                        renderItem={(val)=>{
                            const item=val.item

                            return(
                               <View style={{paddingHorizontal:15}}>
                                    <ReusableFeatureService
                                        image={item.Image}
                                        text1={item.name}    
                                    />
                                    
                                </View>
                               

                            )
                        }}

                    />


                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
    },
    iconSize:{
        width: constants.vw(22),
        height: constants.vh(20),
    },
    logoSize:{
        width: constants.vw(100),
        height: constants.vh(22),
        
    },
    iconArr:{
       // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(20)
    },
    iconArr1:{
        width: constants.vw(50),
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textStyle1:{
        fontSize: constants.vw(14),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
    },
    textStyle2:{
        fontSize: constants.vw(32),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
    },
    textArr:{
        alignItems:'center',
        marginTop: constants.vh(40)
    },
    infoArr:{
        width: constants.vw(122),
        height: constants.vh(20),
       // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    infoSize:{
        width: constants.vw(16),
        height: constants.vh(16),
    },
    cardArr:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(20),
        marginTop: constants.vh(20)
    },
    lineStyle:{
        width:'100%',
        height:8,
        backgroundColor:'#F9FAFC',
        marginTop: constants.vh(15)
    },
    textStyle3:{
        fontSize: constants.vw(16),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        fontFamily:'IBMPlexSans-SemiBold' 
    },
    textStyle4:{
        fontSize: constants.vw(12),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.darkBlue,
        fontFamily:'IBMPlexSans-SemiBold' 
    },
    textArr2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(20),
        marginTop: constants.vh(20)
    },
    dataArr:{
        marginTop: constants.vh(15),
    },
    textStyle5:{
        fontSize: constants.vw(16),
        fontWeight:'600',
        fontStyle:'normal',
        color:constants.Colors.black,
        marginTop: constants.vh(20),
        marginLeft: constants.vw(20)
    },
    iconSize1:{
        width: constants.vw(40),
        height: constants.vh(40),
    },
    textStyle6:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color:constants.Colors.black,
        marginTop:8,
    },
    iconArr2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: constants.vw(40),
        marginTop: constants.vh(15),
    },
    itemAlign:{
        alignItems:'center'
    },
    iconStyle:{
        marginTop: constants.vh(30)
    }

});



