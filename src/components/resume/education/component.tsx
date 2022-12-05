import React from "react";
import Image from 'react-bootstrap/Image'


export default function Education() {
    return (
        <div className="d-flex border border-primary m-2 p-2">
               <div className="m-3 p-2">
                    <p className="lead">Education</p>
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
    );
}