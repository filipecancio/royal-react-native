import React from 'react';
import { Container,Avatar,AvatarImage,Titular,Apelido,Titulo } from './styles';

export interface Props {
    imageAvatar: any;
}

const UserInformation: React.FC<Props> = (props) => {
      return (
        <>
            <Container>
                <Avatar>
                    <AvatarImage source={props.imageAvatar} />
                </Avatar> 
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
