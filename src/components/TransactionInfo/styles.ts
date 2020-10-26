import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    padding:5px;
    border-bottom-width: 0.3px;
    border-bottom-color: rgba(255, 176, 57, 0.5);
`;
export const TextContainer = styled.View`
    
`;
export const TextName = styled.Text`
    font-family:'Raleway_700Bold';
    color:#004369;
    font-size:16px;
`;
export const TextDate = styled.Text`
    font-family:'Raleway_400Regular';
    color: #3D3D3D;
    font-size:15px;
    width: 200px;
`;
export const TextValue = styled.Text`
    font-family:'Raleway_400Regular';
    color: #3D3D3D;
    width: 70px;
`;