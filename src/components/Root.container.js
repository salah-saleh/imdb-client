import React from 'react';
import { Container } from 'kawax-js';
import Header from 'components/header/Header';

class Root extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div>Hello World!</div>
      </div>
    );
  }

}

export default Container(Root);
