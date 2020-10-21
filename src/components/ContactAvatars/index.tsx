import React from 'react';
import Avatar from '../Avatar';
import { Container,Title } from './styles';

export interface Props {
    imageAvatar:any;
}

const UserInformation: React.FC<Props> = (props) => {
      return (
        <>
                {props.imageAvatar.map((contact:any)=>(
                  <Container>
                    <Avatar source={contact.avatar} size={"50px"} />
                    <Title>{contact.nick}</Title>
                  </Container> 
                ))}
        </>
      );
    }

export default UserInformation;
