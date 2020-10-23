import React from 'react';
import Avatar from '../Avatar';
import ContactInfo from '../ContactInfo';
import { Container,TextName,TextDate,TextValue } from './styles';

export interface Props {
    contact:any
}

const TransactionInfo: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <Avatar source={props.contact.avatar} size={'50px'} />
                    <TextName>{props.contact.name}</TextName>
                    <TextDate>{props.contact.date}</TextDate>
                    <TextValue>{props.contact.value}</TextValue>
                </Container> 
        </>
      );
    }

export default TransactionInfo;