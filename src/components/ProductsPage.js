import React from 'react';
import { Link } from 'react-router-dom';

class ProductsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Sample products page</h3>
        <span>Go to: </span>
        <Link to='/home'>
          Go to the home page
        </Link>
      </div>
    )
  }
}

export default ProductsPage;