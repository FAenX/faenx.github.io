import React, { ReactNode } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";


export default function Layout(props: {children: ReactNode}) {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
    }

