import React from "react";
import Image from 'react-bootstrap/Image'
import { styleProps } from "..";

type Props = {
    image: string,
}

const Header = (props: Props) => {
    return (
        <div className="d-flex justify-content-center p-2">
            <Image src={props.image
                ? props.image
                : "https://www.w3schools.com/howto/img_avatar.png"} roundedCircle  width={150}/>
        </div>
    );
            }

export default function PersonalInfo() {
    return (
        <div className="border border-primary d-flex flex-column justify-content-around p-2 " >
            
            <div className="border border-primary d-flex flex-column justify-content-centre text-align-center" style={{lineHeight: "1"}}>
                
                <div className="d-flex flex-row border border-primary jumbotron">
                    <div className="border border-primary ">
                    <Header image="https://www.w3schools.com/howto/img_avatar.png" />
                    </div>
                    <div className="m-3 p-2 border border-primary">
                            <h1 className="display-4"> Emmanuel Davidson </h1>
                        
                            <p className="lead"> I am a software developer with more than 4 years of coding experience in a variety of settings. I currently work as a full stack (NodeJs, React, TSQL and devops) at TheJitu.com in Nyeri kenya. I love writing code and travelling. </p>
                            <hr className="my-4"/>
                            <p> Nairobi, kenya</p>
                    </div>
                    {/* <div>
                        <p>University of Nairobi</p>
                    </div> */}

                </div>
                
                

                <div className="m-3 p-2">
                    <p className="lead">Interesets</p>
                        <div className="m-3 p-2 d-flex">
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}