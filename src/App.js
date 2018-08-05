import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Link , Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import Dropdown from './components/common/Dropdown';

import './App.css';

class App extends Component {

  render() {
    const text="rarar";
    return (
      <div className="App">

        <Router basename="/">
          <div>
            <Route path="/" render={() => (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
            )} />

            <ol>
              <li><Link to={'/home'}>HOME</Link></li>
              <li><Link to={'/products-page/123'}>Products</Link></li>
            </ol>

            <Route exact path="/home" component={Home} />
            <Switch>
              <Route exact path="/products-page" render={() => (<ProductsPage text={text} /> )} />
              <Route path="/products-page/:productId" component={ProductsPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
