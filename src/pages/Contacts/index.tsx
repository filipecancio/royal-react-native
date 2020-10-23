import React, { useState } from 'react';
import { Container,HeaderSearch,Pesquisa } from './styles';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContactAvatars from '../../components/ContactAvatars';
import filipeAvatar from '../../util/images/filipe.png';
import contacts from '../../util/data/contacts.json';
import { Text, View } from 'react-native';


function Contacts(){
    const {navigate} = useNavigation();
    const [currentIndex,setIndex] = useState<number|null>(null);

    function goHome(){
        navigate('Home');
    }
    function selectAvatar (index:any){
      setIndex(index);
    }

    return(
        <>
            <Container>
                <HeaderSearch>
                    <TouchableOpacity onPress={goHome}>
                    <MaterialIcons name="person" size={22} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <Pesquisa placeholder="pesquisar" />
                </HeaderSearch>
                <ContactAvatars selectAvatar={selectAvatar} imageAvatar={contacts}/>
                {!!currentIndex && contacts?.[currentIndex] && <View><Text></Text></View>}
            </Container>
        </>
    );
}

export default Contacts;