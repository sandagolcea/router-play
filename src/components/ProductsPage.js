import React from 'react';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';

const ProductsPage = ({ match, text }) => (
    <div>
    	{match && match.params.productId != 123 && <Redirect to={{pathname: '/products-page'}}/>}
      <h3>Sample products page</h3>
			<span>Go to: </span>
			<Link to='/home'>
				Go to the home page
			</Link>
			{!match && <h5>Vanilla product page</h5>}
			{match && <div>Product id: {match.params.productId}</div>}
			{text && <div>Extra parameter text: {text}</div>}
    </div>
)

export default ProductsPage;
