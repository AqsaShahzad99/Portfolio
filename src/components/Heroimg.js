import "./HeroimgStyle.css";
import React from 'react'
import {Link} from "react-router-dom";
import {BiWinkSmile} from "react-icons/bi"
const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src="https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.jpg?b=1&s=612x612&w=0&k=20&c=XCodgEBZ86FDKt_t6KiR6iAWvHwaOQcF4F2_B7TJA3A=" alt="IntroImg" />

            </div>
            <div className="content">
                <BiWinkSmile className= "icon" size={35} style={{color: "#fff"}}/>

                <p>Portfolio is everything,Promises are nothing.Do the work. </p>
                <div>
                    <Link to="/project" className="btn ">PROJECTS</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg 