import React from 'react';

import { work } from '../js/work';
import { school } from '../js/school';
import { courses } from '../js/courses';

import Bio from './Bio';
import Skills from './Skills'
import ExperienceContainer from './ExperienceContainer';


const App = () => (
  <main>
    <Bio />
    <Skills />
    <ExperienceContainer
      title="Work Experience" 
      experience={work}  
    />
    <ExperienceContainer 
      title="Professional Development"
      experience={courses}
    />
    <ExperienceContainer
      title="Education"
      experience={school}
    />
  </main>
);

export default App;
