import axios from 'axios';
import { UPDATE_PHONENUMBER, UPDATE_EMIALID,UPDATE_PANID,UPDATE_AADHAR_NUMBER ,FETCH_DATA} from './type';

import Services from '../../utils/Services';
 

export const setPhoneNumber = (phoneNumber) => {
    //console.log('action==>',phoneNumber)
    return(dispatch)=>{
    dispatch({
        type: UPDATE_PHONENUMBER,
        payload: {phoneNumber:phoneNumber},
    })
    }
}


export const setEmailId = (emailId) => {
    return(dispatch)=>{
    dispatch({
        type: UPDATE_EMIALID,
        payload: {emailId:emailId},
    })
    }
}



export const setPANId = (PanNo) => {
    return(dispatch)=>{
    dispatch({
        type: UPDATE_PANID,
        payload: {PanNo:PanNo},
    })
    }
}


export const setAadharNumber = (AadharNumber) => {
    return(dispatch)=>{
    dispatch({
        type: UPDATE_AADHAR_NUMBER,
        payload: {AadharNumber:AadharNumber},
    })
    }
}

const endUrl="/v2/top-headlines?country=us&category=business&apiKey=02732b0152324cd4a39737eeb37d2fdc";

export const fetchData=()=>{
    // const request=axios.get(API);

    
    return (dispatch)=>{
        Services.getApiCall(endUrl, '',(response)=>{
            console.log("Response",response)
            let DATA=response.data.articles;
            console.log("DATA==>",DATA)

            dispatch({
                type: FETCH_DATA,
                payload :{ articleData:DATA}
            })
        }, (error)=>{
            console.log("Error",error)
        })
        
    }
}