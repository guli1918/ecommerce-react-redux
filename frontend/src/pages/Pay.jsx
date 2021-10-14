import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY =
	'pk_test_51JkW21Ky40KW832siXea0kpCJLk6LmYqsXduhofs6k56trtU5Ltx8OK9TpPQaH7osPQiTc8j8lOtI06bXRASNQRl00gzHfEzYW';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	border: 2px solid transparent;
	width: 120px;
	border-radius: 5px;
	padding: 20px;
	background-color: black;
	color: white;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		font-weight: 700;
		color: black;
		background-color: white;
		border: 2px solid black;
	}
`;

function Pay() {
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post('http://localhost:5000/api/checkout/payment', {
					tokenId: stripeToken.id,
					amoun: 2000,
				});
				console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		stripeToken && makeRequest();
	});
	return (
		<Container>
			<StripeCheckout
				name='Ecommerce'
				image='https://www.logopik.com/wp-content/uploads/edd/2018/07/Ecommerce-Logo-Vector.png'
				billingAddress
				shippingAddress
				description='Your total is $20'
				amount={2000}
				token={onToken}
				stripeKey={KEY}
			>
				<Button>Pay Now</Button>
			</StripeCheckout>
		</Container>
	);
}

export default Pay;
