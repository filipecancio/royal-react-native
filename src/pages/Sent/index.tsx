import React from 'react';
import {Text, View } from 'react-native';
import { Container } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoHomeButton from '../../components/GoHomeButton';
import GraphArea from '../../components/GraphArea';
import TransactionArea from '../../components/TransactionArea';
import transactions from '../../util/data/sent.json';


function Sent(){
    const {navigate} = useNavigation();

    function goHome(){
        navigate('Home');
    }

    return(
        <>
            <Container>
                <GraphArea handlePage={goHome}></GraphArea>
                <TransactionArea transactions={transactions}/>
            </Container>
        </>
    );
}

export default Sent;