import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { Container,IconButton,IconContainer,Subtitle } from './styles';

export interface Props {
  handlePage: any;
}

const ButtonContact: React.FC<Props> = (props) => {
      return (
        <>
          <Container onPress={props.handlePage}>
            <IconButton>
              <IconContainer>
              <MaterialIcons name="person" size={22} color="#FFFFFF"/>
              </IconContainer>
            </IconButton>
            <Subtitle>Contatos</Subtitle>
          </Container>
        </>
      );
    }

export default ButtonContact;
