// import Home from './pages/Home';
// import ProductList from './pages/ProductList';
// import Product from './pages/Product';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Pay from './pages/Pay';
export default function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/pay'>
						<Pay />
					</Route>
					<Route path='/success'>{/* <Success /> */}</Route>
				</Switch>
			</Router>
		</div>
	);
}
