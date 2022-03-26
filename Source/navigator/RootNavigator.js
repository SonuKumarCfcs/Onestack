import React from 'react';
import { Button, View, Text, TextInput,StyleSheet,TouchableOpacity,Image,SafeAreaView} from'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import constants from '../constants';

// Screens
import PhoneNumberScreen from '../Screens/PhoneNumberScreen.js'
import HomeScreen from '../Screens/HomeScreen.js';
import PhoneVerificationScreen from '../Screens/PhoneVerificationScreen';
import EmailIdScreen from '../Screens/EmailIdScreen.js';
import PanDetailScreen from '../Screens/PanDetailScreen.js';
import AadharDetailScreen from '../Screens/AadharDetailScreen.js';
import AadharVerificationScreen from '../Screens/AadharVerificationScreen.js';
import VerifyIdentityScreen from '../Screens/VerifyIdentityScreen.js';
import DigitalKYCScreen from '../Screens/DigitalKYCScreen.js';
import TakePANCardScreen from '../Screens/TakePANCardScreen.js';
import TakeAadharCardScreen from '../Screens/TakeAadharCardScreen';
import PhotographScreen from '../Screens/PhotographScreen.js';
import SignatureScreen from '../Screens/SignatureScreen.js';
import PersonalDetailScreen from '../Screens/PersonalDetailScreen';
import NomineeDetailScreen from '../Screens/NomineeDetailScreen';
import LastScreen from '../Screens/LastScreen.js';
import DashboardScreen from '../Screens/DashboardScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MyTransactionScreen from '../Screens/MyTransactionScreen.js';
import ContactUsModal from '../Screens/ContactUsModal.js';
import YourAccountScreen from '../Screens/YourAccountScreen.js';
import BookmarkScreen from '../Screens/BookmarkScreen.js';
import SplashScreen from '../Screens/SplashScreen';


const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();


const RootNavigator=()=>{
    return(
      <RootStack.Navigator  initialRouteName={constants.Screens.DashboardScreen}>
        <RootStack.Screen name={constants.Screens.SplashScreen} component={SplashScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.Home} component={HomeScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.PhoneNumberScreen} component={PhoneNumberScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.PhoneVerificationScreen} component={PhoneVerificationScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.EmailIdScreen} component={EmailIdScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.PanDetailScreen} component={PanDetailScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.AadharDetailScreen} component={AadharDetailScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.AadharVerificationScreen} component={AadharVerificationScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.VerifyIdentityScreen} component={VerifyIdentityScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.DigitalKYCScreen} component={DigitalKYCScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.TakePANCardScreen} component={TakePANCardScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.TakeAadharCardScreen} component={TakeAadharCardScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.PhotographScreen} component={PhotographScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.SignatureScreen} component={SignatureScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.PersonalDetailScreen} component={PersonalDetailScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.NomineeDetailScreen} component={NomineeDetailScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.LastScreen} component={LastScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.DashboardScreen} component={DashboardScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.ProfileScreen} component={ProfileScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.MyTransactionScreen} component={MyTransactionScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.YourAccountScreen} component={YourAccountScreen} options={{headerShown:false}} />
        <RootStack.Screen name={constants.Screens.BookmarkScreen} component={BookmarkScreen} options={{headerShown:false}} />
        
        
      </RootStack.Navigator>
    )
}

export default class RootNavigators extends React.Component{
  modalLayout={
    title:'hello',
    ...TransitionPresets.ModalPresentationIOS,
    cardStyle:{
      //backgroundColor:'rgba(0,0,0,0.2)',
      //opacity:1
    }
  }
    render(){
        return(
            <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name="RootNavigator" component={RootNavigator} options={{headerShown: false}} />
            </Stack.Group>
            {/* FOR MODALS */}
            <Stack.Group screenOptions={{presentation: "transparentModal",headerShown: false,}}>
              <Stack.Screen name="ContactUsModal" component={ContactUsModal} options={this.modalLayout} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
        )
    }
}