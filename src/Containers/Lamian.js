import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Auxiliary from '../hoc/Auxiliary/Auxiliary'
import Products from './Products/Products';

class Lamian extends Component {
  render() {
    return (
      <Auxiliary>
        <Route path='/' exact component={Home} />
        <Route path='/Products' exact component={Products} />
        <Route path='/Contact' exact component={Contact} />
      </Auxiliary>

      
    )
  }
}

export default Lamian;