import React from 'react';
import { Button, View , Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from'react-native';
import constants from '../constants';


import Header from '../Components/Header';
import ReusableCard from '../Components/ReuableCard';

export default class VerifyIdentityScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.textArr}>
                    <Text style={styles.textStyle1}>Verify your identity</Text>
                    <Text style={styles.textStyle2}>This will help us authenticate your identity and address</Text>
                    <Text style={styles.textStyle3}>Choose an option</Text>
                </View>
                <View style={styles.cardArr}>
                    <ReusableCard
                        
                        image={require('../../Assets/Rec.png')}
                        name={"Video KYC"}
                        description={"Record a live video of yourself while reading content from the screen"}
                    />
                    <ReusableCard
                        navigation={this.props.navigation}
                        image={require('../../Assets/Cloud.png')}
                        name={"Digital KYC"}
                        description={"Updoald pictures of a few documents and click a photo of yourself for verification"}
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
        fontSize: constants.vw(24),
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        marginTop: constants.vh(20),
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    textStyle2:{
        fontSize: constants.vw(12),
        fontStyle:'normal',
        fontWeight:'400',
        color: constants.Colors.darkGrey,
        marginTop: constants.vw(8)
    },
    textArr:{
        marginLeft: constants.vw(20),
    },
    textStyle3:{
        fontSize:constants.vw(14),
        fontStyle:'normal',
        fontWeight:'600',
        color: constants.Colors.black,
        marginTop: constants.vh(40),
        fontFamily: constants.Fonts.IBMPlexSans_SemiBold,
    },
    cardArr:{
        alignItems:'center',
    }

})