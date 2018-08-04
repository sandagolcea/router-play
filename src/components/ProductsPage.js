import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = ({ match }) => (
    <div>
      <h3>Sample products page</h3>
      <div>Product id: {match.params.productId}</div>
			<span>Go to: </span>
			<Link to='/home'>
				Go to the home page
			</Link>
    </div>
)

export default ProductsPage;
