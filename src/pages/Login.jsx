import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/5705482/pexels-photo-5705482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
			no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
	background-size: cover;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background: white;
	${mobile({ width: '75%' })}
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: gray;
	}

	&:active {
		color: black;
	}
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	border: 1px solid transparent;
	margin-bottom: 10px;
	&:hover {
		background-color: white;
		border: 1px solid teal;
		color: teal;
		font-weight: 600;
	}
	&:active {
		font-weight: 800;
	}
`;

function Login() {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Button>LOGIN</Button>
					<Link>DO NOT REMEMBER YOUR PASSWORD? CLICK HERE</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
}

export default Login;
