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

        <Router>
          <div>
            <Route exact={true} path="/" render={() => (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
            )} />

            <ol>
              <li><Link to={'/home'}>HOME</Link></li>
              <li><Link to={'/products-page/123'}>Products</Link></li>
            </ol>

            <Route path="/home" component={Home} />
            <Route path="/products-page/:productId"
              render={({match}) => (
                <ProductsPage text={"example prop"} match={match}/>
              )}
            />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
