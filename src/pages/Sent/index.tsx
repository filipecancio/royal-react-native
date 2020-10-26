import React, { useState } from 'react';
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
    const [currentId,setId] = useState<number|null>(null);

    function goHome(){
        navigate('Home');
    }

    function selectId (index:any){
        setId(index);
    }

    return(
        <>
            <Container>
                <GraphArea currentId={currentId} handlePage={goHome}></GraphArea>
                <TransactionArea selectId={selectId} transactions={transactions}/>
            </Container>
        </>
    );
}

export default Sent;