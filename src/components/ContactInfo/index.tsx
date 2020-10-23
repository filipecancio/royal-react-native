import React from 'react';
import { Text, View } from 'react-native';
import { Container} from './styles';

export interface Props {
    indexValue: number|null;
}

const ContactInfo: React.FC<Props> = (props) => {
      return (
        <>
        <Container>
            <Text>{props.indexValue?props.indexValue:'nada'}</Text>
        </Container>
        </>
      );
    }

export default ContactInfo;
