import React from 'react';
import { Container,Box,Title } from './styles';

export interface Props {
    value:string,
    color:string
}

const LegendMoney: React.FC<Props> = (props) => {
      return (
        <>
        <Container>
            <Box color={props.color}/>
            <Title>{props.value}</Title>
        </Container>
        </>
      );
    }

export default LegendMoney;