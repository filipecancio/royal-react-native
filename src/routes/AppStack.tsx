import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Transaction from '../pages/Transactions';

const {Navigator,Screen} = createStackNavigator();

function AppStack(){
    return(
        <>
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Home" component={Home}/>
                <Screen name="Contacts" component={Contacts}/>
                <Screen name="Transaction" component={Transaction}/>
            </Navigator>
        </NavigationContainer>
        </>
    );
}

export default AppStack;