import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { Container,IconButton,IconContainer,Legenda } from './styles';

export interface Props {
  handlePage: any;
}

const ButtonContact: React.FC<Props> = (props) => {
      return (
        <>
          <Container onPress={props.handlePage}>
            <IconButton>
              <IconContainer>
              <MaterialIcons name="keyboard" size={22} color="#FFFFFF"/>
              </IconContainer>
            </IconButton>
            <Legenda>Contatos</Legenda>
          </Container>
        </>
      );
    }

export default ButtonContact;
