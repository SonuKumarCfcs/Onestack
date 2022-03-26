import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView, FlatList} from'react-native';


import ReusableProfileHeader from '../Components/ReusableProfileHeader';
import ReusableBookmarkCard from '../Components/ReusableBookmarkCard';

const Data=[
    {
        Image:require('../../Assets/AdityaBiral.png'),
        name:'Aditya Birla Sun Life Digital India Fund Direct - Growth',
        Invest:'Min.Invest',
        Risk:'Risk Level',
        Return:'3Y Returns'
    },
    {
        Image:require('../../Assets/kotak.png'),
        name:'Kotak Mutual Fund Plan - Growth',
        Invest:'Min.Invest',
        Risk:'Risk Level',
        Return:'3Y Returns'
    },
]

export default class BookmarkScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ReusableProfileHeader
                    name={"Bookmarks"}
                    image={require('../../Assets/3dot.png')}
                    navigation={this.props.navigation}
                />
                <View style={styles.lineStyle}></View>
                <FlatList
                    data={Data}
                    renderItem={(val)=>{
                        let item=val.item
                        return(
                            <ReusableBookmarkCard
                                image={item.Image}
                                name={item.name}
                                invest={item.Invest}
                                risk={item.Risk}
                                return={item.Return}
                                contentcontainerStyle={styles.cardStyle}
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
    lineStyle:{
        width:'100%',
        height:8,
        backgroundColor:'#F9FAFC',
        marginTop:15
    },
    cardStyle:{
        marginTop:20,
        marginLeft:30
    }
})

