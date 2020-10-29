import React from 'react';
import { Container,Subtitle } from './styles';

export interface Props {
  handlePage: any;
}

const ButtonHistory: React.FC<Props> = (props) => {
      return (
        <>
          <Container onPress={props.handlePage}>
          <Subtitle>Transferências Recentes</Subtitle>
          </Container>
        </>
      );
    }

export default ButtonHistory;
