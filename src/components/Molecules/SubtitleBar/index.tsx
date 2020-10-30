import React from 'react';
import GraphSubtitle from '../../Atoms/GraphSubtitle';
import { Container} from './styles';

export interface Props {
    subs:any
}

const SubtitleBar: React.FC<Props> = (props) => {
    const colors = ["#2C8CC2","#2CC2B9","#8EC8C4"];
      return (
        <>
        <Container>
        {props.subs.map((legend:string,index:number)=><GraphSubtitle key={legend} color={colors[index]} value={legend}/>)}
        <GraphSubtitle key={0} color={"#0051B0"} value={"outros"}/>
        </Container>
        </>
      );
    }

export default SubtitleBar;