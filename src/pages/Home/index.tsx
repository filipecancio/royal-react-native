import React from 'react';
import {Text, View } from 'react-native';
import { Container,Titulo } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Home(){
    const {navigate} = useNavigation();

    function handleContacts(){
        navigate('Contacts');
    }
    function handleSent(){
        navigate('Sent');
    }

    return(
        <>
            <Container>
                <Titulo>Home</Titulo>
                <TouchableOpacity onPress={handleContacts}>
                    <Text>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSent}>
                    <Text>Sent</Text>
                </TouchableOpacity>
            </Container>
        </>
    );
}

export default Home;