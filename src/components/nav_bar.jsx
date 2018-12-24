import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';
import '../App.css';

const NavBar = props => {
  return (
    <div className="App">
      <ul className="links-top">
        <li>ABOUT</li>
        <li>PROJECTS</li>
      </ul>
    </div>
  )
}

export default NavBar;
