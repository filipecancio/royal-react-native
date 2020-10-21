import React from 'react';
import { Container,Titular,Apelido,Titulo } from './styles';
import Avatar from '../Avatar';

export interface Props {
    imageAvatar: any;
}

const UserInformation: React.FC<Props> = (props) => {
      return (
        <>
            <Container>
                <Avatar source={props.imageAvatar} size={"100px"}/>
                <Titular>Filipe Soares Câncio</Titular>
                <Apelido>Cancio</Apelido>
                <Titulo>filipe.cancio@gmail.com</Titulo>
                <Titulo>ID 234</Titulo>
                <Titulo>77 99922-2299</Titulo>
            </Container>
        </>
      );
    }

export default UserInformation;
