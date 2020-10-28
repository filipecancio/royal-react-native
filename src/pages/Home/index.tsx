import React,{ useState, useEffect } from 'react';
import { Container,Logo } from './styles';
import {useNavigation} from '@react-navigation/native';

import ButtonContact from '../../components/ButtonContact';
import ButtonHistory from '../../components/ButtonHistory';
import UserInformation from '../../components/UserInformation';
import getData from "../../services/api.services";




function Home(){
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
          const content = await getData("home");
          setUser(content);
        })();
      }, []);

    const {navigate} = useNavigation();

    function handleContacts(){
        navigate('Contacts');
    }
    function handleSent(){
        navigate('Transaction');
    }

    return(
        <>
            <Container>
                <Logo>Royal</Logo>
                {user && <UserInformation info={user} />}
                <ButtonContact handlePage={handleContacts}/>
                <ButtonHistory handlePage={handleSent}/>
            </Container>
        </>
    );
}

export default Home;