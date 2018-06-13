import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux/Aux';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <BurgerBuilder />
          <p>Test</p>
        </Layout>
      </Aux>
    );
  }
}

export default App;
