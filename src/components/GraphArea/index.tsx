import React from 'react';
import GoHomeButton from '../GoHomeButton';
import { Container } from './styles';

export interface Props {
    handlePage:any;
}

const GraphArea: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <GoHomeButton handlePage={props.handlePage} />
                </Container> 
        </>
      );
    }

export default GraphArea;