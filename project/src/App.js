import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Sunakku from './Containers/Sunakku';


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Layout>
          <Sunakku />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App
