import React from 'react';

const Experience = ({experience}) => (
  <div>
    <h3>{experience.title}</h3>
    <p>{experience.location}</p>
    <p>{experience.duration}</p>
    <p>{experience.description}</p>
  </div>
);

export default Experience;
