import React from "react";
import "./Footer.css";
 const white={
    color:'white'
 }
function Footer(){
    return(
        <div className="row" id="footer-main">
            <div className="col-md-6 copyright">
                Copyright © 2022 Anurag J.
            </div>
            <div className="col-md-6 social">
                <a href="https://github.com/anuragjaiswal12/"><i className="fa-brands fa-github" style={white}></i></a>
                <a href="https://www.linkedin.com/in/anuragjaiswal12/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://wa.me/919016244131"><i className="fa-brands fa-square-whatsapp"></i></a>
                <a href="mailto:error.kr.404@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    );
}
export default Footer;