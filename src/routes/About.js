import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg3 from '../components/Heroimg3';
import AboutDetail from '../components/AboutDetail';

const About = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg3 heading="ABOUT" text="Hello! I'am Front-End Developer"/>
        <AboutDetail/>
    </div>
  )
}

export default About