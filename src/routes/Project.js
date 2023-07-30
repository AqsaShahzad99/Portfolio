import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="PROJECTS"  text=" Some of my practice works"/>
        <Work/>
    </div>
  )
}

export default Project