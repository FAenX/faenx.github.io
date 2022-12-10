import React, { ReactNode } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";


export default function Layout(props: {children: ReactNode}) {
    return (
        <div className="container-fluid d-flex justify-content-centre flex-column  p-3">
            {props.children}
            <div className="d-flex justify-content-center   p-3"> Footer </div>
        </div>
    );
    }

