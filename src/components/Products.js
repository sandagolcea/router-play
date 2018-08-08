import React from 'react';
import { Route, Link } from 'react-router-dom';

import Postcards from './Products/Postcards';
import Notebooks from './Products/Notebooks';


export default function Products ({ match, text }) {
		console.log('match inside products');
		console.log(match);
		return (
			<div>
				<h3>Products</h3>
				{!match &&
					<div>
					<h5>Vanilla product page</h5>
					<div>Extra parameter text: {text}</div>
				</div>}
				{match && <div>Product id: {match.params.productId}</div>}
				<div>
					<Link to='/products/notebooks'>Notebooks</Link>
				</div>
				<div>
					<Link to='/products/postcards'>Postcards</Link>
				</div>
				<Route exact path={"/products/notebooks"} component={Notebooks} />
				<Route exact path="/products/postcards" component={Postcards} />
			</div>
		)
}

