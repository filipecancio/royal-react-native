import React, { useState } from 'react';
import { Container,HeaderSearch,Pesquisa } from './styles';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContactAvatars from '../../components/ContactAvatars';
import contacts from '../../util/data/contacts.json';
import { Text, View } from 'react-native';
import ContactInfo from '../../components/ContactInfo';
import GoHomeButton from '../../components/GoHomeButton';


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
                    <GoHomeButton handlePage={goHome}/>
                    <Pesquisa placeholder="pesquisar" />
                </HeaderSearch>
                <ContactAvatars selectAvatar={selectAvatar} imageAvatar={contacts}/>
                {!!currentIndex && contacts?.[currentIndex] && <View><Text></Text></View>}
                <ContactInfo indexValue={currentIndex} />
            </Container>
        </>
    );
}

export default Contacts;