import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
	color: ${(props) => props.type === 'filled' && 'white'};

	&:hover {
		opacity: 0.5;
	}

	&:active {
		opacity: 0.9;
	}
`;

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
	margin: 10px 0;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;
const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	border: 1px solid transparent;

	&:hover {
		background-color: white;
		border: 1px solid black;
		color: black;
		cursor: pointer;
	}

	&:active {
		font-weight: 800;
	}
`;

function Cart() {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title></Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type='filled'>CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/vgk0u8hhp7n63punqbbt/futura-icon-t-shirt-nnTrAOJn.png' />
								<Details>
									<ProductName>
										<b>Product:</b> T-Shirt Nike white Polo
									</ProductName>
									<ProductId>
										<b>ID:</b> 691083510895
									</ProductId>
									<ProductColor color='red' />
									<ProductSize>
										<b>Size:</b> XL
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add style={{ cursor: 'pointer' }} />
									<ProductAmount>2</ProductAmount>
									<Remove style={{ cursor: 'pointer' }} />
								</ProductAmountContainer>
								<ProductPrice>$ 19.90</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 39.80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 39.80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Cart;
