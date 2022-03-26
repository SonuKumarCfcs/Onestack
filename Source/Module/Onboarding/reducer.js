import { UPDATE_PHONENUMBER, UPDATE_EMIALID ,UPDATE_PANID , UPDATE_AADHAR_NUMBER} from './type'

const initialState={ 
    phoneNumber:'',
    emailId:'',
    PanNo:'',
    AadharNumber: '',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PHONENUMBER:
            return { ...state,  ...action.payload };
        case UPDATE_EMIALID:
            return { ...state,  ...action.payload };
        case UPDATE_PANID:
            return { ...state,  ...action.payload };
        case UPDATE_AADHAR_NUMBER:
            return { ...state,  ...action.payload };
        default:
            return state;
    }
}

export default reducer;
