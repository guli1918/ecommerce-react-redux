import styled from 'styled-components';
import { popularProducts } from '../data';
import { mobile } from '../responsive';
import Product from './Product';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	${mobile({ padding: '0' })}
`;

function Products() {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id}></Product>
			))}
		</Container>
	);
}

export default Products;
