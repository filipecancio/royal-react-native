import React from 'react';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';
import {useFonts,Raleway_400Regular,Raleway_700Bold} from '@expo-google-fonts/raleway';
import {FredokaOne_400Regular} from '@expo-google-fonts/fredoka-one';

export default function App() {

    let [fontsLoaded] = useFonts({
      Raleway_400Regular,
      Raleway_700Bold,
      FredokaOne_400Regular
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
