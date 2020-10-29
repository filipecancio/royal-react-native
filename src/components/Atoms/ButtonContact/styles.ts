import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    justify-content: center;
	align-items: center;
    margin-bottom:100px;
`;

export const IconButton = styled.View`
    width:67px;
    height:67px;

	background-color: #FFB039;
    border-radius: 50px;
    border-top-right-radius: 10px;
    transform: rotate(45deg);

    margin:5px;

	justify-content: center;
	align-items: center;
  
`;
export const IconContainer = styled.View`
    transform: rotate(-45deg);
`;
export const Subtitle = styled.Text`
    color: #FFFFFFFF;
    font-family:'Raleway_400Regular';
`;
