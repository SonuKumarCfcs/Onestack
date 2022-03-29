import Snackbar from 'react-native-snackbar';
import constants from '../constants';

const postApiCall = (
  endPoint,
  params,
  successCallback,
  errorCalback,
) => {
  constants.Common.axiosInstance
    .post(endPoint, params)
    .then((response) => {
      console.log('post response', response);
      successCallback(response);
    })
    .catch((error) => {
      console.log('put response error', error + endPoint);
      errorCalback(error);
    });
};

const putApiCall = (
  endPoint,
  params,
  successCallback,
  errorCalback ,
) => {
  constants.Common.axiosInstance
    .put(endPoint, params)
    .then((response) => {
      console.log('pout response', response);
      successCallback(response);
    })
    .catch((error) => {
      console.log('put response error', error + endPoint);
      errorCalback(error);
    });
};

const getApiCall = (
  endPoint,
  paramsData= '',
  successCallback,
  errorCalback,
) => {
  constants.Common.axiosInstance
    .get(endPoint + paramsData, {})
    .then((response) => {
      console.log('pout response', response);
      successCallback(response);
    })
    .catch((error) => {
      console.log('get response error', error + endPoint);
      errorCalback(error);
    });
};

const patchApiCall = (
  endPoint,
  params,
  successCallback,
  errorCalback,
) => {
  constants.Common.axiosInstance
    .patch(endPoint, params)
    .then((response) => {
      console.log('patch response', response);
      successCallback(response);
    })
    .catch((error) => {
      console.log('patch response error', error);

      errorCalback(error);
    });
};

const deleteApiCall = (
  endPoint,
  paramsData = '',
  successCallback,
  errorCalback,
) => {
  constants.Common.axiosInstance
    .delete(endPoint + paramsData, {})
    .then((response) => {
      console.log('delete response', response);
      successCallback(response);
    })
    .catch((error) => {
      console.log('delete response error', error);

      errorCalback(error);
    });
};

/**
 * Global API multi purpose handler
 * @param payload
 * @param dropdown
 */
const handleApiError = (payload) => {
  Snackbar.show({
    text: payload,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: 'rgba(0,0,0,0.9)',
    textColor: 'white',
  });
};

export default {
  postApiCall,
  getApiCall,
  patchApiCall,
  putApiCall,
  deleteApiCall,
  handleApiError,
};
