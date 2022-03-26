import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';


import Header from '../Components/Header';
import ReusableTextInput from '../Components/ReusableTextInput';
import ReusableButton  from '../Components/ReusableButton';
import constants from '../constants';

export default class NomineeDetailScreen extends React.Component{
    state={
        Name:'',
        DOB:'',
        Gender:'',
        Relation:'',
    }

    
    onUpdate=this.props.route.params.onUpdate
    render(){
        // console.log("Props==>>",this.props)
       //  console.log("OnUpdate==>>",this.onUpdate)
        return(
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation} />
                <ScrollView>
                <View style={styles.textArr}>
                        <Text style={styles.textStyle1}>Nominee Details</Text>
                        <Text style={styles.textStyle2}>Tell us about your nominee</Text>
                        <Text style={styles.textStyle3}>Name</Text>
                        <ReusableTextInput
                            Data={this.props.Name}
                            onValueInput={(val)=>{
                                this.setState({
                                    Name:val.trim()
                                })
                            }}
                        />

                        <Text style={styles.textStyle3}>Date of Birth</Text>
                        <ReusableTextInput
                            Data={this.props.DOB}
                            onValueInput={(val)=>{
                                this.setState({
                                    DOB:val.trim()
                                })
                            }}

                        />

                        <Text style={styles.textStyle3}>Gender</Text>
                        <ReusableTextInput
                            Data={this.props.Gender}
                            onValueInput={(val)=>{
                                this.setState({
                                    Gender:val.trim()
                                })
                            }}
                        />

                        <Text style={styles.textStyle3}>Relation</Text>
                        <ReusableTextInput
                            Data={this.props.Relation}
                            onValueInput={(val)=>{
                                this.setState({
                                    Relation:val.trim()
                                })
                            }}
                        />

                    </View>
                </ScrollView>
                <View style={styles.linestyle1}></View>
                <View style={styles.buttonArr}>
                    <ReusableButton
                        buttonName={"Done"}
                        onClick={()=>{this.onUpdate(this.state.Name,this.state.DOB,this.state.Gender,this.state.Relation),this.props.navigation.pop()}}
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
        marginTop:8
    },
    textStyle3:{
        fontSize: constants.vw(12),
        fontWeight:'500',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop: constants.vh(30),
        fontFamily: constants.Fonts.IBMPlexSans_Medium
    },
    textArr:{
        marginLeft: constants.vw(20),
        marginTop:constants.vh(20),
    },
    linestyle1:{
        width:'100%',
        height:0.4,
        backgroundColor:'grey',
        marginTop:constants.vh(52)
    },
    buttonArr:{
        alignItems:'center'
    }
    
    
})





//this.onUpdate(this.state.Name,this.state.DOB,this.state.Gender,this.state.Relation),