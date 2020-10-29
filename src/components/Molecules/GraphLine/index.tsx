import React from 'react';
import { Container} from './styles';
import Svg from 'react-native-svg';
import GraphLinearBar from '../../Atoms/GraphLinearBar';

export interface Props {
  totais:any
}

const GraphLine: React.FC<Props> = (props) => {
    const colors = ["#2C8CC2","#2CC2B9","#8EC8C4"];
      return (
        <>
            <Container>
                <Svg height="100%" width="100%" >
                  <GraphLinearBar color="#0051B0" previousValue={props.totais[0]} value={100}/>
                  {props.totais.map((total:number,index:number)=><GraphLinearBar key={total} color={colors[index]} previousValue={props.totais[index+1]?props.totais[index+1]:0} value={total}/>)}
                </Svg>
            </Container> 
        </>
      );
    }

export default GraphLine;