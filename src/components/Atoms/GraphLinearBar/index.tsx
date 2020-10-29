import React from 'react';
import { Rect,Text } from 'react-native-svg';

export interface Props {
    previousValue:number,
    value:number,
    color:string
}

const GraphLinearBar: React.FC<Props> = (props) => {
        const percentage:number = props.value - props.previousValue;
      return (
        <>
            <Rect x="0" y="0" width={props.value * 3} height="8" rx="4" fill={props.color}/>
            <Text x={(props.value * 3)-22} y="8" fontSize="10" fill="#ffffff">{percentage}%</Text>
        </>
      );
    }

export default GraphLinearBar;