import React from 'react';
import Skill from './Skill';

const Skills = () => (
  <div>
      <h2>Skills</h2>
      <Skill 
        name="ReactJS"
        icon="react"
        scale={0.6}
      />
      <Skill 
        name="jQuery"
        icon="jquery"
        scale={0.8}
      />
  </div>
);

export default Skills;
