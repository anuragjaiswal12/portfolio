import React from "react";
import "./Resume.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from './../resume/resume.pdf';

const margin={
    'margin-bottom':'1rem'
}
function Resume(){
    return (
        <div className="resume">
            <div className="row">
                <div className="col-md-12">
                    <a className="btn btn-outline-primary" href={resume} style={margin}>Download</a>
                </div>
                <div className="col-md-12 doc">
                    <Document file={resume}>
                    <Page pageNumber={1}/>
                    </Document>
                </div>
            </div>
        </div>
    );
}
export default Resume;