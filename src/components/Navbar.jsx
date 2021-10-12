import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Search } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 60px;
	user-select: none;
	${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	${mobile({ padding: '10px 0' })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	cursor: pointer;
	${mobile({ marginLeft: '2px' })}
`;

const Input = styled.input`
	border: none;
	height: 20px;
	${mobile({ width: '50px' })}
`;
const Center = styled.div`
	flex: 2;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 4, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
	margin-left: 25px;
	cursor: pointer;
	transition: all 0.1s ease;
	${mobile({ fontSize: '12px', marginLeft: '10px' })}

	&:hover {
		transform: scale(1.05);
		color: ${(props) => props.color};
	}

	&:active {
		color: ${(props) => props.color2};
	}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Commerce</Logo>
				</Center>
				<Right>
					<MenuItem color='RebeccaPurple' color2='MediumSlateBlue'>
						REGISTER
					</MenuItem>
					<MenuItem color='teal' color2='LightSeaGreen'>
						SIGN IN
					</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
