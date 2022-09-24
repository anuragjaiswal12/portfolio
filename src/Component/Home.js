import React from "react";
import "./Home.css";
import home_img from './../image/home_logo.png';
import blob from './../image/blob.png';
const card={
    background:'transparent',
    border:'none'
}
 function Home(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 intro">
                    <h1 className="heading">Hi There!{" "}<span className=""><i className="fa-solid fa-hand-peace"></i></span></h1>
                    <h1>I'm <strong className="name">Anurag Jaiswal</strong></h1>
                </div>
                <div className="col-md-5">
                    <img src={home_img} className='img-fluid'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 about">
                    <div className="card" style={card}>
                        <div className="card-body">
                            <h1 className="card-text">Let me introduce myself</h1>
                            <h3 className="card-text">I'm a programmer learing new Technologies.</h3>
                            <h3 className="card-text">I am fluent in classics like <span className="name">C++</span>, <span className="name">Java</span> and <span className="name">Python</span>.</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className='img-fluid' src={blob}/>
                </div>
            </div>
        </div>
    );
 }
 export default Home;