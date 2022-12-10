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
        <div className="border border-primary d-flex flex-row flex-wrap justify-content-around"   >
            <div className="border border-danger m-3" style={{minWidth: "400px", width: "45%"}} >
                <PersonalInfo />
                <Skills />
            </div>
              
           
            <div className="border border-danger m-3" style={{width: "50%", minWidth: "400px" }}>
                <Experience />
                <Education />
                
               
               
            </div>
            <div  >
            <Interests />   
            <Projects />
            </div>
            
            
        </div>
    );
}
