import React from 'react';
import AvatarCircle from '../../Atoms/AvatarCircle';
import { Container,TextName,TextContainer,TextDate,TextValue } from './styles';

export interface Props {
    contact:any,
    selectId:(id:number)=>void
}

const TransactionInfo: React.FC<Props> = (props) => {
      const {selectId} = props;
      return (
        <>
                <Container onPress={()=> selectId(props.contact.id)}>
                    <AvatarCircle source={props.contact.avatar} size={'50px'} />
                    <TextContainer>
                      <TextName>{props.contact.name}</TextName>
                      <TextDate>{props.contact.date}</TextDate>
                    </TextContainer>
                    <TextValue>{props.contact.value}</TextValue>
                </Container> 
        </>
      );
    }

export default TransactionInfo;