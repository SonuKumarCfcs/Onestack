import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView,ActivityIndicator} from'react-native';
import constants from '../constants';

import Header from '../Components/Header';

export default class LastScreen extends React.Component{
    state={
        visible  : true
    }
    componentDidMount(){
        setTimeout(
            ()=>{this.props.navigation.navigate('DashboardScreen'),this.setState({visible: false})},
            3000
        )
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.circleArr}>
                    <View style={styles.circleStyle1}>
                        <View style={styles.circleStyle2}>
                            <View style={styles.circleStyle3}>
                                <Text style={styles.textStyle1}>Your Logo</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle2}>Your account is being created!</Text>
                    <Text style={styles.textStyle2}>created!</Text>
                    <View style={styles.linestyle}></View>
                    <Text style={styles.textStyle3}>Putting it all together</Text>
                    <Text style={styles.textStyle4}>This can take a few minutes. Stay with us!</Text>
                </View>
                {
                    this.state.visible ?<ActivityIndicator color='red' size='large'/> : null
                }
                
            </SafeAreaView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
    },
    circleStyle1:{
        width: constants.vw(204),
        height: constants.vh(204),
        borderWidth:2,
        borderColor: constants.Colors.darkBlue,
        borderRadius: constants.vw(204/2),
        justifyContent:'center',
        alignItems:'center',
    },
    circleStyle2:{
        width: constants.vw(186),
        height: constants.vh(186),
        borderWidth:4,
        borderColor:'#E2EDF8',
        borderRadius: constants.vw(186/2),
        justifyContent:'center',
        alignItems:'center',
    },
    circleStyle3:{
        width: constants.vw(162),
        height: constants.vh(162),
        backgroundColor: constants.Colors.lightGrey,
        borderRadius: constants.vw(186/2),
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle1:{
        fontSize: constants.vw(24),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.darkBlue,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    circleArr:{
        marginTop: constants.vh(120),
        alignItems:'center',
    },
    textStyle2:{
        fontSize: constants.vw(24),
        fontWeight:'600',
        fontStyle:'normal',
        color: constants.Colors.black,
        marginTop:5,
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textArr:{
        alignItems:'center',
        marginTop: constants.vh(40),
    },
    linestyle:{
        width: constants.vw(282),
        height:4,
        marginTop: constants.vh(40),
        borderRadius: constants.vw(100),
        backgroundColor: constants.Colors.darkBlue,
    },
    textStyle3:{
        fontSize: constants.vw(10),
        fontWeight:'400',
        fontStyle:'normal',
        color:'#00000052',
        marginTop: constants.vh(20)
    },
    textStyle4:{
        fontSize: constants.vw(12),
        fontWeight:'400',
        fontStyle:'normal',
        color: constants.Colors.darkGrey,
        marginTop: constants.vh(20)
    },

});