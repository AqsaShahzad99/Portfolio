import React from 'react'
import "./AboutDetailStyle.css"
import { FaHtml5,FaCss3Alt,FaReact,FaLinkedin ,FaGithub} from "react-icons/fa";
import { SiJavascript,SiDart,SiFlutter,SiGmail } from "react-icons/si";

const AboutDetail = () => {
  return (
    <div className="about">

        <div className="center">
            <h1>Who Am I?</h1>
            <p>I am a Front-End Developer.I create responsive secure website and application.<br/>Hard Skills:  <FaHtml5/> <FaCss3Alt/> <SiJavascript/>  <FaReact/> <SiDart/> <SiFlutter/></p>
            <h1>Connect with me on:</h1>
            <p className='contact'> <SiGmail/> aqsashehzad99@gmail.com <FaLinkedin/> aqsashahzad99@linkedin.com  <FaGithub/> aqsashahzad99@github.com </p>
          
        </div>
    </div>
        
  )
}

export default AboutDetail;