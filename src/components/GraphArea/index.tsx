import React from 'react';
import GoHomeButton from '../GoHomeButton';
import { Container,Title,SuperiorArea } from './styles';

export interface Props {
    handlePage:any,
    currentId:number
}

const GraphArea: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <SuperiorArea>
                      <GoHomeButton handlePage={props.handlePage} />
                    </SuperiorArea>
                    <Title>{props.currentId}</Title>
                </Container> 
        </>
      );
    }

export default GraphArea;