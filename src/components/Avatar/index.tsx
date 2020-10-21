import React from 'react';
import { Container,AvatarImage } from './styles';

export interface Props {
    source: any;
    size: any;
}

const UserInformation: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <AvatarImage source={{uri: props.source}} size={props.size}/>
                </Container> 
        </>
      );
    }

export default UserInformation;
