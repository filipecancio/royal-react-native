import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons} from '@expo/vector-icons';

export interface Props {
  handlePage: any;
}

const GoHomeButton: React.FC<Props> = (props) => {
      return (
        <>
          <TouchableOpacity onPress={props.handlePage}>
            <MaterialIcons name="home" size={22} color="#FFFFFF"/>
          </TouchableOpacity>
        </>
      );
    }

export default GoHomeButton;
