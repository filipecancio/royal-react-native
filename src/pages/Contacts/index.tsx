import React from 'react';
import {Text, View } from 'react-native';
import { Container } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContactAvatars from '../../components/ContactAvatars';
import filipeAvatar from '../../util/images/filipe.png';
import contacts from '../../util/data/contacts.json';


function Contacts(){
    const {navigate} = useNavigation();

    function goHome(){
        navigate('Home');
    }

    return(
        <>
            <Container>
                <TouchableOpacity onPress={goHome}>
                    <Text>back</Text>
                </TouchableOpacity>
                <ContactAvatars imageAvatar={contacts}/>
            </Container>
        </>
    );
}

export default Contacts;