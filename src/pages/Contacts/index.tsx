import React from 'react';
import {Text, View } from 'react-native';
import { Container } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Contacts(){
    const {navigate} = useNavigation();

    function goHome(){
        navigate('Home');
    }

    return(
        <>
            <Container>
                <Text>Contacts</Text>
                <TouchableOpacity onPress={goHome}>
                    <Text>back</Text>
                </TouchableOpacity>
            </Container>
        </>
    );
}

export default Contacts;