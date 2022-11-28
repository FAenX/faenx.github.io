import React from "react";
import Image from 'react-bootstrap/Image'


export default function PersonalInfo() {
    return (
        <div>
            <div>
                <Image src="https://via.placeholder.com/150" roundedCircle />
            </div>
            <div>
                <h1>John Doe</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    );
}