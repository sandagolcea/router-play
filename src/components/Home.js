import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Sample HOME page</h3>
        <span>Go to: </span>
        <Link to='/products-page'>
          Go to the products page
        </Link>
      </div>
    )
  }
}

export default Home;