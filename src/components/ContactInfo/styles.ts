import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    height: 530px;
    justify-content:center;
    align-items:center;
`;
export const InfoContainer = styled.View`
    width: 100%;
    justify-content:center;
    align-items:center;
`;
export const Logo = styled.Text`
    font-family:'FredokaOne_400Regular';
	color:#FFFFFF;
    font-size:60px;
`;
export const Title = styled.Text`
    font-family:'Raleway_700Bold';
	color:#FFB039;
    font-size:20px;
    margin-top:5px;
    margin-bottom:5px;
`;
export const IdInfo = styled.Text`
    font-family:'Raleway_400Regular';
    color:#2C8CC2;
    font-size:14px;
    margin-bottom:5px;
`;
export const PhoneInfo = styled.Text`
    font-family:'Raleway_400Regular';
	color:#FFB039;
    font-size:14px;
    margin-bottom:10px;
`;
export const PesquisaContainer = styled.View`
    flex-direction:row;
    align-items:center;
`;
export const Pesquisa = styled.TextInput`
	background-color:#ffffffff;
	color:#787878;
	height:56px;
	width:90%;
	border-radius:500px;
	padding-left:17px;
`;
export const PesquisaButton = styled.TouchableOpacity`
    margin-left:5px;
`;