import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Link , Route } from 'react-router-dom';

// components
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import Dropdown from './components/common/Dropdown';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router>
          <div>

            <h3>LINKS:</h3>
            <div>
              <Link to={'/home'}>HOME</Link>
            </div>
            <div>
              <Link to={'/products-page/123'}>Products</Link>
            </div>

            <h3>PAGES:</h3>
            <div>
              <Route path="/home" component={Home} />
              <Route path="/products-page/:productId" component={ProductsPage} />
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
