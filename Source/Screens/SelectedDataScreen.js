import React from 'react';
import { 
    Button, 
    View, 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView, 
    ScrollView,
    FlatList
} from'react-native';
import constants from '../constants';
import ReusableButton from '../Components/ReusableButton';
import Header from '../Components/Header';
import ReusableDataCard from '../Components/ReusableDataCard';

class SelectedDataScreen extends  React.Component{
    newSelectedData=this.props.route.params.newSelectedData;
    render(){
        //console.log("All info==>",this.props)
        return(
            <SafeAreaView style={styles.container}>
                <Header  navigation={this.props.navigation}/>
                <FlatList
                   data={this.newSelectedData} 
                   renderItem={val=>{
                       const item=val.item
                       return(
                        <ReusableDataCard
                        author={item.author}
                        content={item.content}
                        description={item.description}
                        publishedAt={item.publishedAt}
                        sourceId={item.source.id}
                        sourceName={item.source.name}
                        title={item.title}
                        url={item.url}
                        urlToImage={item.urlToImage}
                        
                        contentContainerStyle={styles.carstyle}
                       
                       
                    />
                       )
                   }}
                />
                <ReusableButton
                    buttonName={'NEXT'}
                    onClick={()=>{this.props.navigation.navigate('PhoneNumberScreen')}}
                />
            </SafeAreaView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
        alignItems:'center'
    },
    carstyle:{
        marginTop: constants.vh(10),
        padding:constants.vw(10)
    },
});

export default SelectedDataScreen;