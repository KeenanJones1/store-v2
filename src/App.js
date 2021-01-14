import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';

// pages 
import Index from './pages/index'
import ShoppingCart from './pages/cart'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Index />}/>
            <Route exact path="/cart" render={() => <ShoppingCart />}/>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App

