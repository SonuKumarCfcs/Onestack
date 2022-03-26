import { UPDATE_PHONENUMBER, UPDATE_EMIALID,UPDATE_PANID,UPDATE_AADHAR_NUMBER} from './type';

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