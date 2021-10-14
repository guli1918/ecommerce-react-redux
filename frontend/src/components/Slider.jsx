import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
	${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
	user-select: none;

	&:hover {
		opacity: 0.75;
	}

	&:active {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1.5s ease;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Image = styled.img`
	height: 80%;
	width: 100%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.h1`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	border: none;
	font-size: 20px;
	background-color: black;
	color: white;
	cursor: pointer;
	:hover {
		background-color: gray;
	}
	:active {
		background-color: lightgray;
	}
`;

const Slider = () => {
	const [slideIndex, setslideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			slideIndex > 0
				? setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
				: setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
			console.log(slideIndex);
		} else {
			slideIndex < 2 ? setslideIndex(slideIndex + 1) : setslideIndex(0);
			console.log(slideIndex);
		}
	};
	return (
		<Container direction='left'>
			<Arrow onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction='right' onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
