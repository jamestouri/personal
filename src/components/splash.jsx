import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/splash.css';

const SplashPage = () => {
  return (
      <div className="astronaut-image">
        <h1 className="welcome-text">WELCOME</h1>
        <div className="side-piece">
          <p className="intro">Hi, thanks for visiting my personal site. -James</p>
          <Link to="/about" className="link-to-about">more about me</Link>
        </div>
      </div>
  )
}

export default SplashPage;
