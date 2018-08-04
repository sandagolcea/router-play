import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = ({ match, text }) => (
    <div>
      <h3>Sample products page</h3>
			<span>Go to: </span>
			<Link to='/home'>
				Go to the home page
			</Link>
			<div>Product id: {match.params.productId}</div>
			<div>Extra parameter text: {text}</div>
    </div>
)

export default ProductsPage;
