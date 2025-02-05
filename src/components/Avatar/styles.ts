import styled from 'styled-components/native';

export const Container = styled.View<{size: any}>`
	border: 1px #FFB039;
	border-radius: 500px;
	padding: 5px;
`;
export const AvatarImage = styled.Image<{size: any}>`
	width: ${props => props.size};
	height: ${props => props.size};
	border-radius: 500px;
`;