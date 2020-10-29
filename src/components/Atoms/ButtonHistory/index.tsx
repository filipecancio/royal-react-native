import React from 'react';
import { Container,Legenda } from './styles';

export interface Props {
  handlePage: any;
}

const ButtonHistory: React.FC<Props> = (props) => {
      return (
        <>
          <Container onPress={props.handlePage}>
          <Legenda>Transferências Recentes</Legenda>
          </Container>
        </>
      );
    }

export default ButtonHistory;
