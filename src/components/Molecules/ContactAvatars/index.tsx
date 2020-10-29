import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Avatar from '../../Atoms/Avatar';
import { AvatarContainer,Container,Title } from './styles';

export interface Props {
    imageAvatar:any;
    selectAvatar:(index:number)=>void;
}

const ContactAvatars: React.FC<Props> = (props) => {

      const {selectAvatar} = props;
      return (
        <>
        <Container>
          <ScrollView horizontal>
            {props.imageAvatar.map((contact:any,index:number)=>(
                  <AvatarContainer key={index} onPress={()=>selectAvatar(index)}>
                    <Avatar source={contact.avatar} size={"50px"} />
                    <Title>{contact.nick}</Title>
                  </AvatarContainer> 
                ))}
          </ScrollView>
        </Container>
                
        </>
      );
    }

export default ContactAvatars;
