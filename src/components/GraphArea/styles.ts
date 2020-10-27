import styled from 'styled-components/native';

export const Container = styled.View`
    width:100%;
    height: 323px;
    padding-top:60px;
    padding-left:20px;
    background-color: rgba(255,255,255,0.7);
    z-index:2;
    align-items:center;
`;
export const SuperiorArea = styled.View`
    height:40px;
    width: 100%;
    flex-direction:row;
`;
export const ContentArea = styled.View`
    width: 100%;
    justify-content:center;
    align-items:center;
`;
export const Title = styled.Text`
    font-family:'Raleway_400Regular';
    color: #FFB039;
    font-size:20px;
`;
export const Title2 = styled.Text`
    font-family:'Raleway_700Bold';
    width:100%;
    color: #FFB039;
    font-size:10px;
`;
export const Subtitle = styled.Text`
    font-family:'Raleway_700Bold';
    color: #2C8CC2;
    font-size:15px;
`;