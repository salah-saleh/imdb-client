import React from 'react';
import { Container } from 'kawax-js';
import Header from 'components/header/Header';
import Body from 'components/body/Body';

class Root extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }

}

export default Container(Root);
