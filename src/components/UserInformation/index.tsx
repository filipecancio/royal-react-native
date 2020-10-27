import React from 'react';
import { Container,Titular,Apelido,Titulo } from './styles';
import Avatar from '../Avatar';

export interface Props {
    info: any;
}

const UserInformation: React.FC<Props> = (props) => {
      return (
        <>
            <Container>
                <Avatar source={props.info.avatar} size={"100px"}/>
                <Titular>{props.info.name}</Titular>
                <Apelido>{props.info.nick}</Apelido>
                <Titulo>{props.info.email}</Titulo>
                <Titulo>{props.info.id}</Titulo>
                <Titulo>{props.info.phone}</Titulo>
            </Container>
        </>
      );
    }

export default UserInformation;
