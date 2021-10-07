import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
`;

const Logo = styled.h1`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Desc = styled.p`
	margin: 20px;
`;
const SocialContainer = styled.div`
	display: flex;
	margin: 20px;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		opacity: 0.75;
		transform: scale(1.15);
	}
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	cursor: pointer;

	&:hover {
		font-weight: 500;
	}

	&:active {
		font-weight: 600;
		user-select: none;
	}
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
`;
const Payment = styled.img`
	width: 50%;
`;

function Footer() {
	return (
		<Container>
			<Left>
				<Logo>E-Commerce</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda fuga
					saepe laudantium qui minus ad sed cumque perspiciatis quidem dolorem voluptas,
					nesciunt voluptates odit excepturi commodi eum quis quaerat modi, earum
					explicabo laboriosam cum. Dolor numquam sit eius labore ratione unde officia
					autem hic obcaecati quaerat distinctio, eligendi libero.
				</Desc>
				<SocialContainer>
					<SocialIcon color='3B5999'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='E4405F'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='55ACEE'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='E60023'>
						<LinkedIn />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title></Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> Tallinn/Estonia
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} /> +372 59123456
				</ContactItem>
				<ContactItem>
					<Mail style={{ marginRight: '10px' }} /> info@ecommerce.com
				</ContactItem>
				<Payment src='https://www.rhodesgraduation.com/wp-content/uploads/cards.png' />
			</Right>
		</Container>
	);
}

export default Footer;
