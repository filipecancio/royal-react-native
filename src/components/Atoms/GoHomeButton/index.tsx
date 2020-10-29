import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons} from '@expo/vector-icons';

export interface Props {
  handlePage: any,
  color:string
}

const GoHomeButton: React.FC<Props> = (props) => {
      return (
        <>
          <TouchableOpacity onPress={props.handlePage}>
            <MaterialIcons name="home" size={22} color={props.color}/>
          </TouchableOpacity>
        </>
      );
    }

export default GoHomeButton;
