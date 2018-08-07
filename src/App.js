import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Link , Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import Accessories from './components/Accessories';
import Products from './components/Products';

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
              <li><Link to={'/products/123'}>Products</Link></li>
              <li><Link to={'/accessories'}>Accessories</Link></li>
            </ol>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/accessories" component={Accessories} />
              <Route exact path="/products" render={() => (<Products text={text} /> )} />
              <Route path="/products/:productId" component={Products} />
              <Route render={() => (<h2>No match</h2>)} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
