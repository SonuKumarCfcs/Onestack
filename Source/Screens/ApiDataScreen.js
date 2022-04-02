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
import ReusableDataCard from '../Components/ReusableDataCard';
import { connect } from 'react-redux';
import {fetchData} from '../Module/Onboarding/action';
import Header from '../Components/Header';
import ReusableTextInput from '../Components/ReusableTextInput';
import { any } from 'react-native/Libraries/Text/TextNativeComponent';


class ApiDataScreen extends  React.Component{
    // DATA=[this.props.articleData] 
    state={
       // searchData:'',
        visible:true,
        AllData:[],
        filterData:[],
        filterCard:[],
        arr:[]
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        console.log("nextProps=>=>",nextProps);
        console.log("prevState=>=>",prevState);

            return {
                AllData:[...nextProps.articleData],
                filterData:[...nextProps.articleData],
            }
   
    }
    onFilter=()=>{
        this.setState({
            filterCard: this.state.AllData.filter(i=>{
                if(this.state.visible)
                return i;
            })
        })
    }
   
    searchFunction=(val)=>{
       let newArr=this.state.AllData.filter(obj=>{
            if(obj.author==null){
                return ;
            }
           //console.log("Obj==>",obj)
            //debugger;
           let a = val.toLowerCase();
           //debugger;
           let b = obj.author.toLowerCase();
           if(b.includes(a)){
               return obj;
           }
            
        })
        //debugger;
        this.setState({
           filterData : [...newArr]
        
        })
        

        // console.log("newArr==>",newArr)
        // console.log("FilterDataUpdated==>",this.state.filterData)

        
    }
    
    componentDidMount(){
        this.props.fetchData()
        // console.log('fetchData',this.props.fetchData())
    }

    render(){
        // console.log('DataFlatList==>',this.props.articleData)
        // console.log("DATA==>",this.DATA)
        // console.log("filterCard==>",this.state.filterCard)
         
         //console.log("filetrData==>",this.state.filterData)
         console.log("AllData==>",this.state.AllData)
        return(
            <SafeAreaView style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <Image style={styles.searchPosition} source={require('../../Assets/ic_search_search.png')}/>
                <ReusableTextInput
                    Data={this.state.searchData}
                    onValueInput={(val)=>{
                            this.searchFunction(val)
                         
                    }
                       
                    }
                />
                <FlatList
                    //numColumns={20}
                    style={{marginTop:10}}
                    //extraData={this.state.filterData}
                    showsVerticalScrollIndicator={false}
                    data={this.state.filterData}
                    
                    renderItem={(val)=>{
                        const item=val.item;
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
                                    onFilter={this.onFilter}
                                    onClick={()=>{this.setState({
                                        visible:!this.state.visible,
                                    })}}
                                    contentContainerStyle={styles.carstyle}
                                    visible={this.state.visible}
                                   
                                />
                                
                            
                        )
                    }}
                    
                />
                
                <ReusableButton
                    buttonName={'NEXT'}
                    onClick={()=>{this.props.navigation.navigate('SelectedDataScreen',{
                        newSelectedData:this.state.filterCard
                    })}}
                />
            </SafeAreaView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.Colors.white,
        alignItems:'center',
        
    },
    carstyle:{
        marginTop: constants.vh(10),
        padding:constants.vw(10)
    },
    searchPosition:{
        position:'absolute',
        right:'10%',
        top:'17.5%',
    },
    
});

const mapStateToProps=(state)=>{
    // console.log("state=>>",state)
    //console.log("articleDataAPI=>>",state.Onboarding.articleData)
    return({
    articleData : state.Onboarding.articleData,
    
})}

const mapDispatchToProps = {

    fetchData : ()=>fetchData()
    
}


export default connect(mapStateToProps,mapDispatchToProps)(ApiDataScreen);

