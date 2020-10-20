import React from 'react';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';
import {useFonts,Raleway_400Regular,Raleway_700Bold} from '@expo-google-fonts/raleway';

export default function App() {

    let [fontsLoaded] = useFonts({
      Raleway_400Regular,
      Raleway_700Bold,
    });

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return (
      <>
        <AppStack/>
      </>
    );
  }
}
