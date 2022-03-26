import React from 'react';

import RNSplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import { persistor, store } from './Source/reducer/store.js';
import Navigation from './Source/navigator/RootNavigator';




export  default class App extends React.Component {
  
  componentDidMount(){
    RNSplashScreen.hide()
  }
    
  render(){
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider> 
    )
  }
}




