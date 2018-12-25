import React, { Component } from 'react';
import SplashPage from './components/splash';
import AboutPage from './components/about';
import ProjectPage from './components/projects';
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
        <HashRouter>
          <React.Fragment>
          <header>
            <NavBar/>
          </header>
          <body className="background">
              <Switch>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/projects' component={ProjectPage}/>
                <Route exact path='/' component={SplashPage}/>
            </Switch>
          </body>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
