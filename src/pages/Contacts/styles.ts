import styled from 'styled-components/native';

export const Container = styled.View`
	flex:1;
	padding-top:30px;
	background-color: #95C6E1;
	justify-content: flex-start;
	align-items: center;
`;
export const HeaderSearch = styled.View`
	flex-direction:row;
	align-items:center;
	justify-content:space-around;
	width:100%;
`;
export const Titulo = styled.Text`
	color:#2C8CC2;
`;
export const Pesquisa = styled.TextInput`
	background-color:#ffffffff;
	color:#787878;
	height:56px;
	width:80%;
	border-radius:500px;
	padding-left:17px;
`;
