import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import TopNav from './components/TopNav';
import Landing from './components/Landing';
import { Container, Button } from '@material-ui/core';
import Catalog from './components/Catalog';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [
        {name: 'Zohar', color: 'torquise'},
        {name: 'Rudolf', color: 'grey'},
        {name: 'Bijo', color: 'yellow'},
        {name: 'Alex', color: 'blue'},
        {name: 'Sergey', color: 'green'},
      ]
    }
  }

  render(){
    const state = this.state

    return (
      <Router>
      <div className="App">
        <Route path='/' component={TopNav} />
        <Container>
          <Route exact path='/' render={() => <Landing users={state.users} />} />
          <Route exact path='/catalog' render={() => <Catalog />} />
        </Container>

      </div>
      </Router>
    );
  }
}

export default App;
