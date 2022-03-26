import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';
import ReusableDetailHeader from '../Components/ReusableDetailHeader';
import ReusableTextInput from '../Components/ReusableTextInput';
import ReusableButton from '../Components/ReusableButton';

export default class PersonalDetailScreen extends React.Component{
    state={
        Name:'',
        DOB:'',
        Gender:'',
        Relation:'',
        Fname:'',
        Mname:'',
    }
    render(){
        //  console.log("State==>>",this.props)
        
        return(
            <SafeAreaView style={styles.container}>
                <ReusableDetailHeader navigation={this.props.navigation}/>
                <ScrollView>
                    <View style={styles.textArr}>
                        <Text style={styles.textStyle1}>Personal Details</Text>
                        <Text style={styles.textStyle2}>Help us get to know you a little better</Text>
                        <Text style={styles.textStyle3}>Father's Full Name</Text>
                        <ReusableTextInput
                            Data={this.state.Fname}
                            onValueInput={(val)=>{
                                this.setState({
                                    Fname:val
                                })
                            }}

                        />

                        <Text style={styles.textStyle3}>Mother's Full Name</Text>
                        <ReusableTextInput
                            Data={this.state.Mname}
                            onValueInput={(val)=>{
                                this.setState({
                                    Mname:val
                                })
                            }}
                        />

                        <Text style={styles.textStyle3}>Nominee(optional)</Text>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate("NomineeDetailScreen",
                            {onUpdate:(Name,DOB,Gender,Relation)=>{
                                // console.log("onUpdate==>>",this.state)
                                this.setState({
                                    Name:Name,
                                    DOB:DOB,
                                    Gender:Gender,
                                    Relation:Relation
                                })
                            }}
                            )}}
                            style={styles.boxStyle}>
                            <Text style={styles.textStyle4}>Add Nominee</Text>
                            <Image source={require('../../Assets/Plus.png')} style={styles.imageSize}/>
                        </TouchableOpacity>
                        { this.state.Name!='' ? (<View style={styles.dataStyle}>
                            <View style={styles.textArr1}>
                                <Text style={styles.textStyle5}>Name</Text>
                                <Text>{this.state.Name}</Text>
                            </View>

                            <View  style={styles.textArr1}>
                                <Text style={styles.textStyle5}>DOB</Text>
                                <Text>{this.state.DOB}</Text>
                            </View>

                            <View  style={styles.textArr1}>
                                <Text style={styles.textStyle5}>Gender</Text>
                                <Text>{this.state.Gender}</Text>
                            </View>

                            <View  style={styles.textArr1}>
                                <Text style={styles.textStyle5}>Relation</Text>
                                <Text>{this.state.Relation}</Text>
                            </View>

                        </View>): null }
                        

                    </View>

                </ScrollView>
                <View style={styles.linestyle1}></View>
                <View style={styles.buttonArr}>
                    <ReusableButton
                        buttonName={"Next"}
                        onClick={()=>{this.props.navigation.navigate('LastScreen')}}
                    />
                </View>


            </SafeAreaView>
        )
    }
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
    },
    textStyle1:{
        fontSize: constants.vw(16),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textStyle2:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop: constants.vh(8)
    },
    textStyle3:{
        fontSize: constants.vw(12),
        fontWeight:'500',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop:constants.vh(30),
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    },
    textArr:{
        marginLeft: constants.vw(20),
        marginTop: constants.vh(20),
    },
    boxStyle:{
        width: constants.vw(327),
        height: constants.vh(44),
        borderWidth:1,
        borderColor: constants.Colors.darkBlue,
        borderRadius: constants.vw(8),
        marginTop: constants.vh(8),
        justifyContent:'center'
    },
    textStyle4:{
        fontSize: constants.vw(12),
        fontWeight:'500',
        fontStyle:'normal',
        color: constants.Colors.darkBlue,
        marginLeft: constants.vw(8),
        
    },
    imageSize:{
        width: constants.vw(15.86),
        height: constants.vw(15.86),
        position:'absolute',
        right: constants.vw(10)
    },
    linestyle1:{
        width:'100%',
        height:0.4,
        backgroundColor: constants.Colors.grey,
        marginTop: constants.vh(52)
    },
    buttonArr:{
        alignItems:'center'
    },
    dataStyle:{
        width: constants.vw(328),
        height: constants.vh(136),
        marginTop: constants.vh(20),
        borderColor: constants.Colors.grey,
        borderWidth:1,
        borderRadius:8,
        justifyContent:'space-around',
        
        
    },
    textStyle5:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        
    },
    textArr1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        fontFamily: constants.Fonts.IBMPlexSans_Medium,
    }

   

});