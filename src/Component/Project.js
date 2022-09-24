import React from "react";
import './Project.css';
import Project_data from './../project/Project.json';
const bg={
    background: 'rgba( 255, 255, 255, 0.2 )',
    'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    'backdrop-filter':'blur( 4.5px )',
    '-webkit-backdrop-filter': 'blur( 4.5px )',
    'border-radius': '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    margin:'1rem'
}
const white={
    color:'white',
    padding:'0 1rem 0 0'
 }

 const urlCheker=(url)=>{
    if(url!=null){
        return(<><a href={url} className="btn btn-outline-primary"><i className="fa-regular fa-file-code" style={white}></i>Demo</a></>)
    }
 }
function Project(){
    return (
        <div className="row">
            {
                Project_data.map((element,index) => {
                    return(
                            <div className="col-md-4 col-sm-6">
                                <div className="card" style={bg}>
                                    <div className="card-body">
                                        <div className="card-title" key={index}>
                                            <h2>{element.name}</h2>
                                        </div>
                                        <div className="card-text">
                                            {element.about}
                                        </div>
                                        <div className="card-text">
                                            {element.about1}
                                        </div>
                                        <div className="card-text">
                                            {element.about2}
                                        </div>
                                        <div className="card-link">
                                            <a href={element.github} className="btn btn-outline-primary"><i className="fa-brands fa-github" style={white}></i>Github</a>
                                            {
                                            urlCheker(element.url)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                })
            }
        </div>
    )
}
export default Project;