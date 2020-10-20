import styled from 'styled-components/native';

export const Container = styled.View`
	flex:1;
	background-color: #009FF9;
	justify-content: center;
	align-items: center;
  
`;
export const Avatar = styled.View`
	border: 1px #FFB039;
	border-radius: 500;
	padding: 5px;
`;
export const AvatarImage = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 500;
`;
export const Titular = styled.Text`
	font-family:'Raleway_700Bold';
	color:#FFB039;
	font-size:20px;
	margin: 10px;
`;
export const Apelido = styled.Text`
	font-family:'Raleway_700Bold';
	color:#FFFFFF;
	font-size:20px;
`;
export const Titulo = styled.Text`
	font-family:'Raleway_400Regular';
	color:#FFFFFF;
	font-size:14px;
	margin: 2px;
`;