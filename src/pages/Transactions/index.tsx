import React, { useState } from 'react';
import {Text, View } from 'react-native';
import { Container } from './styles';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoHomeButton from '../../components/Atoms/GoHomeButton';
import GraphArea from '../../components/Organisms/GraphArea';
import TransactionArea from '../../components/Organisms/TransactionArea';
import transactions from '../../util/data/transactions.json';
import query from '../../util/data/transactionsQuery.json';



function Transaction(){
    const {navigate} = useNavigation();
    const [currentValue,setValue] = useState<any>(query.totals[0]);

    function goHome(){
        navigate('Home');
    }

    function selectId (index:any){
        const response = query.totals.map((value)=>{
            if(value.id == index){setValue(value)};
        })
    }

    return(
        <>
            <Container>
                <GraphArea graphValues={currentValue} handlePage={goHome}></GraphArea>
                <TransactionArea selectId={selectId} transactions={transactions}/>
            </Container>
        </>
    );
}

export default Transaction;