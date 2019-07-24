import React from 'react';
import Experience from './Experience';

const ExperienceContainer = (props) => (
  <div>
    <h2>{props.title}</h2>
    {(props.experience).map((item) => {
      return (
        <Experience
          key={item.id}
          experience={item}
        />
      )
    })}
  </div>
);

export default ExperienceContainer;
