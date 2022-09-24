import React from "react";
import './About.css';
import about_img from './../image/about_img.png';
import asp from './../image/asp.png';
import cpp from './../image/cpp.png';
import cs from './../image/cs.png';
import git from './../image/git.png';
import github from './../image/github.png';
import html from './../image/html.png';
import java from './../image/java.png';
import js from './../image/js.png';
import mongo from './../image/leaf.png';
import linux from './../image/linux.png';
import mysql from './../image/mysql.png';
import php from './../image/php.png';
import python from './../image/python.png';
import rc from './../image/react.png';
import visualstudio from './../image/visualstudio.png';
import vscode from './../image/vscode.png';

const blur={
    background: 'rgba( 255, 255, 255, 0.2 )',
    'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    'backdrop-filter':'blur( 4.5px )',
    '-webkit-backdrop-filter': 'blur( 4.5px )',
    'border-radius': '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
}
const white={
    color:'white'
}
const padding={
    padding:'1rem'
}
function About(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 about">
                    <div className="card" style={blur}>
                        <div className="card-body">
                            <div className="card-title"><h1>Anurag Jaiswal</h1></div>
                            <div className="card-subtitle"><h2>Developer</h2></div>
                            <p className="card-text">Hi Everyone, I am <span>Anurag Jaiswal</span> from Gujarat, India.</p>
                            <p className="card-text">I'm student pursuing <span>MCA</span>.</p>
                            <div className="social">
                                <a href="https://github.com/anuragjaiswal12/"><i className="fa-brands fa-github" style={white}></i></a>
                                <a href="https://www.linkedin.com/in/anuragjaiswal12/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://wa.me/919016244131"><i className="fa-brands fa-square-whatsapp"></i></a>
                                <a href="mailto:error.kr.404@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={about_img} className="img-fluid"/>
                </div>
            </div>
            <div className="row skill">
                <h1><strong><emp>Skillset</emp></strong></h1>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={cpp} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={cs} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={python} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={asp} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={php} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={java} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={rc} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={git} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={github} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={html} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={mysql} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={mongo} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={js} className="img-fluid" style={padding}/></div>
            </div>
            <div className="row ide">
                <h1><strong><emp>IDE</emp></strong></h1>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={linux} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={vscode} className="img-fluid" style={padding}/></div>
                <div className="col-md-2 col-sm-4 box" style={blur}><img src={visualstudio} className="img-fluid" style={padding}/></div>
            </div>
        </div>
    );
}
export default About;