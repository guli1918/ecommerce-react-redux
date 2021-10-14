import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	cursor: pointer;
`;

const Circle = styled.div`
	width: 325px;
	height: 325px;
	border-radius: 50%;
	background-color: rgba(245, 251, 253, 0.2);
	position: absolute;
	opacity: 0;
	box-shadow: 10px 10px 75px -8px rgba(245, 251, 253, 0.5);
	-webkit-box-shadow: 10px 10px 75px -8px rgba(225, 221, 223, 0.5);
	-moz-box-shadow: 10px 10px 75px -8px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 380px;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
	${mobile({ minWidth: '360px' })}

	&:hover ${Info} {
		opacity: 1;
	}
	&:hover ${Circle} {
		opacity: 1;
	}
`;
const Image = styled.img`
	height: 75%;
	z-index: 1;
`;
const Icon = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

function Product({ item }) {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
}

export default Product;
