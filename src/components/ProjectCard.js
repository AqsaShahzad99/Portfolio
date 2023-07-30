import { NavLink } from "react-router-dom";
import "./ProjectCardStyle.css";
import React from 'react'
// import {img1} from "../assets/img1.jpg";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
            {/* <img scr={props.image} alt="cute kitten"/> */}
            <h2 className="project-title"> {props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to={props.source} className="btn"> Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard