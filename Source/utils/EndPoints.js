export default {
    auth: {
      login: '/api/user/login',
      resendOtp: '/api/user/resendOtp',
      verifyOtp: '/api/user/verifyOtp',
      checkEmailExists: (email) => `/api/user/checkEmailExists/${email}`,
      verifyPassword: (password) =>
        `/api/user/verifyPassword?password=${password}`,
      checkUserPhone: (countryCode, phoneNo) =>
        `/api​/user/checkPhoneExists​/${countryCode}​/${phoneNo}`,
      signup: '/api/user/signup',
      forgetPasswordEmail: '/api/user/forgetPasswordEmail',
      socialLogin: '/api/user/socialLogin',
      appleAppAuth: '/api/user/appleAppAuth',
      resetOtp: '/api/user/verifyResetOtp',
      resetPassword: '/api/user/resetPassword',
      logout: '/api/user/logout',
      verificationEmailLink: (email) =>
        `/api/user/verificationEmailLink/${email}`,
      changePhoneNo: '/api/user/changePhoneNo',
      verifyChangePhoneOtp: '/api/user/verifyChangePhoneOtp',
      completeProfile: '/api/user/completeProfile',
    },
}