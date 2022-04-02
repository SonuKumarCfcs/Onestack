import React from 'react';
import { 
    Button, 
    View , 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView, 
    ScrollView
} from'react-native';
import constants from '../constants';


class ReusableDataCard extends React.Component{
    // state={
    //     visible:true,
    // }
    // onSelect=()=>{
    //     this.setState({
    //         visible:!this.state.visible,
    //     })
    // }
    
    render(){
        return(
            <TouchableOpacity style={{...styles.cardDimension,...this.props.contentContainerStyle}}
            onPress={()=>{ this.props.onClick(),this.props.onFilter()}}
            activeOpacity={0.8}
            >
                <Text>Author: {this.props.author}</Text>
                <Text>Content: {this.props.content}</Text>
                <Text>Description: {this.props.description}</Text>
                <Text>PublishedAt: {this.props.publishedAt}</Text>
                <Text>SourceId: {this.props.sourceId}</Text>
                <Text>SourceName: {this.props.sourceName}</Text>
                <Text>Title: {this.props.title}</Text>
                <Text>url: {this.props.url}</Text>
                <Text>url To Image: </Text>
                <Image style={styles.imageStyle} source={{uri: this.props.urlToImage}}/>
                {this.props.visible ?
                    null :
                    <Image style={styles.circleStyle} source={require('../../Assets/check.png')}/>
                }
                
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    cardDimension:{
        width: constants.vw(350),
        height: constants.vh(510),
        backgroundColor: constants.Colors.white,
        borderRadius: constants.vw(15),
        borderWidth:0.4,
        borderColor: constants.Colors.grey,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
            borderRadius:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageStyle:{
        width:constants.vw(330),
        height:constants.vh(150),
        borderRadius:constants.vw(10),
        marginTop:constants.vh(5)
        
    },
    circleStyle:{
        width: constants.vw(20),
        height: constants.vh(20),
        position:'absolute',
        right:'4%',
        top:8
    }
   
});

export default ReusableDataCard;