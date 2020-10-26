import React from 'react';
import { Container,LegendArea,Title } from './styles';
import Svg, { Circle, Rect,Text,Ellipse } from 'react-native-svg';
import LegendMoney from '../LegendMoney';

export interface Props {
  percentage:number
}

const GraphLine: React.FC<Props> = (props) => {
    const value = `${1.57 * props.percentage} 360`;
    const diffpercentage = 100 - props.percentage;
      return (
        <>
            <Container>
                <Svg height="100px" width="100px" >
                  <Circle cx="50" cy="50" fill="#009FF9" r="50px"/>
                  <Circle cx="50" cy="50" stroke="#2C8CC2" r="25px" strokeWidth="50" strokeDasharray={value} />
                  <Text x="65" y="48" fontSize="10" fill="#ffffff">{diffpercentage}%</Text>
                  <Text x="65" y="60" fontSize="10" fill="#ffffff">{props.percentage}%</Text>
                </Svg>
                <LegendArea>
                  <Title>Transferidos</Title>
                  <LegendMoney value="R$1000,00" color="#009FF9"/>
                  <Title>Recebidos</Title>
                  <LegendMoney value="R$1000,00" color="#2C8CC2"/>
                </LegendArea>
            </Container> 
        </>
      );
    }

export default GraphLine;