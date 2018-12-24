import React, { Component } from 'react';
import './reset.css';
import './App.css';
import NavBar from './components/nav_bar';
import {
  Route,
  HashRouter,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <header>
          <NavBar/>
        </header>
        <body>
          <HashRouter>
            <Switch>
                <h1>Hi</h1>
            </Switch>
          </HashRouter>
        </body>
      </React.Fragment>
    );
  }
}

export default App;
