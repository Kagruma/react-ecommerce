import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Lamian from './Containers/Lamian';

class App extends Component {
  render() {

    return (
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet"></link>
        
      <BrowserRouter>
        <Layout>
          <Lamian />
        </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App