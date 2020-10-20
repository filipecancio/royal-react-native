import React from 'react';
import {Text, Image } from 'react-native';
import { Container,Logo } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ButtonContact from '../../components/ButtonContact';
import ButtonHistory from '../../components/ButtonHistory';
import UserInformation from '../../components/UserInformation';

import logo from '../../util/images/logo.png';
import filipeAvatar from '../../util/images/filipe.png';


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
                <Logo source={logo} />
                <UserInformation imageAvatar={filipeAvatar} /> 
                <ButtonContact handlePage={handleContacts}/>
                <ButtonHistory handlePage={handleSent}/>
            </Container>
        </>
    );
}

export default Home;