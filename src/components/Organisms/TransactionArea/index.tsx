import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import TransactionInfo from '../../Molecules/TransactionInfo';
import { Container } from './styles';

export interface Props {
  transactions:any,
  selectId:(id:number)=>void;
}

const TransactionArea: React.FC<Props> = (props) => {
      return (
        <>
          <Container>
            <ScrollView>
              {props.transactions.map((contact:any,index:number)=> (<TransactionInfo selectId={props.selectId} key={index}  contact={contact}/>))}
            </ScrollView>
          </Container> 
        </>
      );
    }

export default TransactionArea;