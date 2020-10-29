import React, { useState, useEffect } from 'react';
import { Container,HeaderSearch,Pesquisa } from './styles';
import {useNavigation} from '@react-navigation/native';
import ContactAvatars from '../../components/Molecules/ContactAvatars';
import ContactInfo from '../../components/Molecules/ContactInfo';
import GoHomeButton from '../../components/Atoms/GoHomeButton';
import getData from "../../services/api.services";


function Contacts(){
    const {navigate} = useNavigation();
    const [currentIndex,setIndex] = useState<number|null>(null);
    const [contacts, setContacts] = useState();

    useEffect(() => {
        (async () => {
          const content = await getData("contacts");
          setContacts(content);
        })();
      }, []);

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
                {contacts && <ContactAvatars selectAvatar={selectAvatar} imageAvatar={contacts}/>}
                {contacts && <ContactInfo indexValue={currentIndex} contacts={contacts} />}
            </Container>
        </>
    );
}

export default Contacts;