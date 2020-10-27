import React from 'react';
import Legend from '../Legend';
import { Container} from './styles';

export interface Props {
    legends:any
}

const LegendBar: React.FC<Props> = (props) => {
    const colors = ["#2C8CC2","#2CC2B9","#8EC8C4"];
      return (
        <>
        <Container>
        {props.legends.map((legend:string,index:number)=><Legend key={legend} color={colors[index]} value={legend}/>)}
        <Legend key={0} color={"#0051B0"} value={"outros"}/>
        </Container>
        </>
      );
    }

export default LegendBar;