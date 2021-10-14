import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Announcement = () => {
	return <Container>Super deal free shipping for orders over $50</Container>;
};

export default Announcement;
