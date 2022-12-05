import React from "react";
import { styleProps } from ".";
import Education from "./education";
import Experience from "./experience";
import Interests from "./Interests";
import PersonalInfo from "./personalInfo/personalInfo";
import Projects from "./projects";
import Skills from "./skills";


export default function Experiences() {
    return (
        <div className="border border-primary d-flex flex-column justify-content-around m-3" >
            <div className="border border-primary">
            <PersonalInfo />
          
            </div>
            <div className="border border-primary">
           
            <Interests />
            </div>
           
            {/* <div className="border border-primary d-flex flex-column justify-content-around m-3"> */}
            
            {/* <div className="">
                <Experience />
            </div> */}


            {/* <Projects />
            
            <Education /> */}
            {/* </div> */}
            
            
        </div>
    );
}
