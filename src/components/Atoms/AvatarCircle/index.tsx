import React from 'react';
import { Container, Avatar } from './styles';

export interface Props {
    source: any;
    size: any;
}

const AvatarCircle: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <Avatar source={{uri: props.source}} size={props.size}/>
                </Container> 
        </>
      );
    }

export default AvatarCircle;
