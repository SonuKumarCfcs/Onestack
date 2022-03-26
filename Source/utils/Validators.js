import CommonFunctions from './CommonFunctions';
import constants from '../constants';



const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z0-9 ]{3,50}$/;
const phoneRegex = /^\d{8,14}$/;


// EMAIL VALIDATION

const validateEmail = (email) => {
    if (!email) {
      return {
        status: false,
        msg: constants.String.enter_email_error,
      };
    } else {
      return emailRegex.test(email)
        ? {status: true, msg: ``}
        : {
            status: false,
            msg: constants.String.enter_valid_email_error,
          };
    }
};
// NAME VALIDATION


const validateName = (name) => {
    if (!name) {
      return {
        status: false,
        msg: constants.String.name_validation_error,
      };
    } else {
      return nameRegex.test(name)
        ? {status: true, msg: ``}
        : name.length <= 3 && name.length >= 1
        ? {
            status: false,
            msg: 'nameMinimum',
          }
        : {
            status: false,
            msg: constants.String.name_validation_error,
          };
    }
};

// PHONENUMBER VALIDATION

const validatePhone = (phone) => {
    if (!phone) {
      return {
        status: false,
        msg: constants.String.enter_number,
      };
    } else {
      const formattedPhone = parseInt(phone).toString();
      return phoneRegex.test(formattedPhone)
        ? {status: true, msg: ``}
        : {
            status: false,
            msg: constants.String.valid_phone_error,
          };
    }
};


export default {
    validateEmail,
    validateName,
    validatePhone,
}

