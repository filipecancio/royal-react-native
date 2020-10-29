import React from 'react';
import { Container,LegendArea,Title } from './styles';
import Svg, { Circle,Text } from 'react-native-svg';
import GraphSubtitleMoney from '../../Atoms/GraphSubtitleMoney';

export interface Props {
  debit:number,
  credit:number
}

const GraphLine: React.FC<Props> = (props) => {
    const percentage:number = (props.credit * 100)/(props.debit+props.credit);
    const value = `${1.57 * percentage} 360`;
    const diffpercentage = 100 - percentage;
      return (
        <>
            <Container>
                <Svg height="100px" width="100px" >
                  <Circle cx="50" cy="50" fill="#009FF9" r="50px"/>
                  <Circle cx="50" cy="50" stroke="#2C8CC2" r="25px" strokeWidth="50" strokeDasharray={value} />
                  <Text x="65" y="48" fontSize="10" fill="#ffffff">{diffpercentage > 0 ?`${diffpercentage.toFixed(2)}%`:''}</Text>
                  <Text x="65" y="60" fontSize="10" fill="#ffffff">{percentage > 0 ?`${percentage.toFixed(2)}%`:''}</Text>
                </Svg>
                <LegendArea>
                  <Title>Transferidos</Title>
                  <GraphSubtitleMoney value={`R$ ${props.debit.toFixed(2)}`} color="#009FF9"/>
                  <Title>Recebidos</Title>
                  <GraphSubtitleMoney value={`R$ ${props.credit.toFixed(2)}`} color="#2C8CC2"/>
                </LegendArea>
            </Container> 
        </>
      );
    }

export default GraphLine;