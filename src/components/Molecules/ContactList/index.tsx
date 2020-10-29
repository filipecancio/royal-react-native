import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AvatarCircle from '../../Atoms/AvatarCircle';
import { AvatarContainer,Container,Title } from './styles';

export interface Props {
    contacts:any;
    selectAvatar:(index:number)=>void;
}

const ContactList: React.FC<Props> = (props) => {

      const {selectAvatar} = props;
      return (
        <>
        <Container>
          <ScrollView horizontal>
            {props.contacts.map((contact:any,index:number)=>(
                  <AvatarContainer key={index} onPress={()=>selectAvatar(index)}>
                    <AvatarCircle source={contact.avatar} size={"50px"} />
                    <Title>{contact.nick}</Title>
                  </AvatarContainer> 
                ))}
          </ScrollView>
        </Container>
                
        </>
      );
    }

export default ContactList;
