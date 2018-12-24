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
        <li></li>
        <li>GITHUB</li>
        <li>RESUME</li>
      </ul>
      <div className="bottom-line">
      </div>
    </div>
  )
}

export default NavBar;
