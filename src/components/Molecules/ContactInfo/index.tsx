import React from 'react';
import { Text, View } from 'react-native';
import AvatarCircle from '../../Atoms/AvatarCircle';
import { Container,Logo,InfoContainer,Title,IdInfo,PhoneInfo,PesquisaContainer,Pesquisa,PesquisaButton } from './styles';
import { MaterialIcons} from '@expo/vector-icons';

export interface Props {
    indexValue: number|null,
    contacts:any,
}

const ContactInfo: React.FC<Props> = (props) => {
      return (
        <>
        <Container>
            {props.indexValue==null?(<Logo>Royal</Logo>):(
              <InfoContainer>
                <AvatarCircle source={props.contacts[props.indexValue].avatar} size={'200px'}/>
                <Title>{props.contacts[props.indexValue].name}</Title>
                <IdInfo>ID {props.contacts[props.indexValue].id}</IdInfo>
                <PhoneInfo>{props.contacts[props.indexValue].phone}</PhoneInfo>
                <PesquisaContainer>
                  <Pesquisa keyboardType='numeric' placeholder="R$ 0,00"/>
                  <PesquisaButton>
                  <MaterialIcons name="send" size={22} color="#FFB039"/>
                  </PesquisaButton>
                </PesquisaContainer>
                
              </InfoContainer>
            )}
        </Container>
        </>
      );
    }

export default ContactInfo;
