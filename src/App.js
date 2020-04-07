import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from './testdata';

import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import Menu from './components/Menu/Menu';
import AddItem from './components/AddItem/AddItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    storeddata.push(newdata);
    this.setState({
      data: storeddata
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact render={() => <Items data={this.state.data} />} />
          <Route path="/stats" component={Stats} />
          <Route path="/settings" component={Settings} />
          <Route path="/add" render={() => <AddItem onFormSubmit={this.handleFormSubmit} />} />
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;