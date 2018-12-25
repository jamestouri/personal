import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/about.css';
import '../App.css';

const AboutPage = () => {
  return (
    <div className="about-me">
      <h1 className="welcome-text">ABOUT</h1>
      <p className="about-paragraph">Hi, my name is James, and I'm currently a software engineer. I have a big interest in the Space industry and Virtual Reality.
        I work on various stacks that include using React, Javascript, Node.js, Rails and Relational/Non-Relational Databases.
        <br/>I became a software engineer mainly because I want to get involved in the space/robotics industry, and the best way to contribute to those companies is to help
        build the product they want to bring out onto the world. Other interests I have include building products that build jobs for users and individuals alike.
        <br/>
        I love snowboarding and I can't get up to the Tahoe mountains enough during the season, also big movie goer and can watch my personal favorites all day for the 5th time.</p>
      <p className="email">Interested in chatting? <a href = "mailto: jamestouri50@gmail.com">Send me a message</a></p>
    </div>
  )
}

export default AboutPage;
