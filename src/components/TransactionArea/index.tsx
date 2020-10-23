import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import TransactionInfo from '../TransactionInfo';
import { Container } from './styles';

export interface Props {
  transactions:any
}

const TransactionArea: React.FC<Props> = (props) => {
      return (
        <>
          <Container>
            <ScrollView>
              {props.transactions.map((contact:any,index:number)=> (<TransactionInfo key={index}  contact={contact}/>))}
            </ScrollView>
          </Container> 
        </>
      );
    }

export default TransactionArea;