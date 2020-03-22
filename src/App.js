import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Kulukortti from './components/Kulukortti/Kulukortti';
import Content from './components/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Kulukortti />
          <Kulukortti />
          <Kulukortti />
          <Kulukortti />
        </Content>
        <Menu />
      </div>
    );
  }
}


export default App;