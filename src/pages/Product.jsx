import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin: 30px 0;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: teal;
		color: white;
		font-weight: 700;
	}

	&:active {
		opacity: 0.9;
	}
`;

function Product() {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
				</ImgContainer>
				<InfoContainer>
					<Title>T-shirt Nike</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente
						voluptas dicta quod, adipisci non? Quis quidem quod animi neque doloribus,
						repudiandae nesciunt tenetur iste obcaecati, consectetur temporibus! Labore
						consectetur illo delectus natus et ullam iusto quis debitis eaque eum,
						adipisci nesciunt odio tempore reiciendis asperiores, quae illum fugit.
						Quas.
					</Desc>
					<Price>$ 25.00</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color='black' />
							<FilterColor color='darkblue' />
							<FilterColor color='gray' />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
}

export default Product;
