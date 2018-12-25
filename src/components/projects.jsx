import React from 'react';
import '../stylesheets/project.css';

const ProjectPage = () => {
  return (
    <div className="projects">
      <div className="porcelain">
        <h1>Porcelain</h1>
        <p>A single page web application that crowdsources restrooms and reviews.
          Great for Ride-Sharing drivers that need to find clean restrooms.
          Built with React, Redux, Javascript, Node.js and MongoDB.
          Integrates with Google Maps Api</p>
        <a href="http://flushme.herokuapp.com">Go to Site</a>
      </div>
      <div className="togather">
        <h1>ToGathering</h1>
        <p>A single page web application helps users find like-minded inviduals
          by joining groups and events. Inspired by Meetup. Built with Rails,
          React, Redux, Javascript, and PostgreSQL</p>
        <a href="http://togathering.herokuapp.com">Go to Site</a>

      </div>
      <div className="pyromatics">
        <h1>Pyromatics</h1>
        <p>Finalist at the SpaceApps Hackathon sponsored by NASA.
          An application that crowdsources forest fires and shows safe zones on
          the map. Built in MongoDB, React, Redux, Node.js, and Javascript</p>
        <a href="http://streamlyne.stream:7777/">Go to Site</a>

      </div>
    </div>
  )
}

export default ProjectPage;
