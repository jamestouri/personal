import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';
import '../App.css';

const NavBar = () => {
  return (
    <div className="App">
      <ul className="links-top">
        <li><Link className="text"to="/about">ABOUT</Link></li>
        <li><Link className="text"to="/projects">PROJECTS</Link></li>
        <li><Link className="text bold" to="/">HOME</Link></li>
        <li><a href="https://github.com/jamestouri"className="text">GITHUB</a></li>
        <li><a href="https://linkedin.com/in/jamestouri" className="text">
  		      LINKEDIN
  			</a></li>

      </ul>
      <div className="bottom-line">
      </div>
    </div>
  )
}

export default NavBar;
