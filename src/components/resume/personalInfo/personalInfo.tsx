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
                : "https://www.w3schools.com/howto/img_avatar.png"} roundedCircle  width={120}/>
        </div>
    );
            }

export default function PersonalInfo() {
    return (
        <div className="border border-primary d-flex flex-column justify-content-around p-2 " >            
            <div className="border border-primary d-flex flex-column justify-content-centre text-align-center" style={{lineHeight: "1"}}>                
                <div className="d-flex flex-row border border-primary">
                    <div className="border border-primary ">
                        <Header image="https://www.w3schools.com/howto/img_avatar.png" />
                    </div>
                    <div className="m-2 border border-primary">
                        <p className="display-4"> Emmanuel Davidson </p>                    
                        <p className="lead"> I am a software developer with more than 4 years of coding experience in a variety of settings. I currently work as a full stack (NodeJs, React, TSQL and devops) at TheJitu.com in Nyeri kenya. I love writing code and travelling. </p>
                        <hr className="my-4"/>
                        <p> Nairobi, kenya</p>
                    </div>
                </div>
            </div>
        </div>
    );
}