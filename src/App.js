import React, { Component } from 'react';
import SplashPage from './components/splash';
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
      <React.Fragment>
        <header>
          <NavBar/>
          <h1 className="welcome-text">WELCOME</h1>
        </header>
        <body className="background">
          <HashRouter>
            <Switch>
              <Route exact path='/' component={SplashPage}/>
            </Switch>
          </HashRouter>
        </body>
      </React.Fragment>
    );
  }
}

export default App;
