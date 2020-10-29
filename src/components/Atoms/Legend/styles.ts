import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin-left: 10px;
`;

export const Box = styled.View<{color: string}>`
    width:10px;
    height:10px;
    margin-right: 5px;
    background-color:${props=>props.color};
`;
export const Title = styled.Text`
    font-family:'Raleway_700Bold';
    color: #FFB039;
    font-size:10px;
`;