import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';

export default class SplashScreen extends React.Component{
    componentDidMount(){
        setTimeout(
            ()=>{this.props.navigation.navigate('Home')},
            2000
        )
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image source={require('../../Assets/Huawei-Logo.png')} style={styles.imageSize}/>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'bisque',
        alignItems:'center',
        justifyContent:'center',
    },
    imageSize:{
        width:300,
        height:250,
    },
})