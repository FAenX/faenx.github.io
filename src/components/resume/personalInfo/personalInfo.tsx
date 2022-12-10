import { Skeleton, Stack } from "@mui/material";
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
        <div className=" -primary d-flex flex-column justify-content-around m-2 ">            
            <div className=" -primary d-flex flex-column justify-content-centre text-align-center" style={{lineHeight: "1"}}>                
                <div className="d-flex flex-row  -primary">
                    <div className=" m-3 p-3 ">
                    {/* {
                        item ? (
                            <img
                            style={{
                                width: 210,
                                height: 118,
                            }}
                            alt={item.title}
                            src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        );
                        } */}

                        <Skeleton variant="circular" width={210} height={210} />
                    </div>
                    <Stack spacing={1} className="p-2">
                        <p className="display-6"> Emmanuel Davidson </p>                    
                        <hr className="my-4"/>
                        <p> Nairobi, kenya</p>
                    </Stack>
                </div>
                <div className="border p-3 m-3">
                <p className="lead"> I am a software developer with more than 4 years of coding experience in a variety of settings. I currently work as a full stack (NodeJs, React, TSQL and devops) at TheJitu.com in Nyeri kenya. I love writing code and travelling. </p>

                    </div>
            </div>
        </div>
    );
}