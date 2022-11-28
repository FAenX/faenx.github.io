import React, { ReactNode } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";


export default function Layout(props: {children: ReactNode}) {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            {props.children}
        </ThemeProvider>
    );
    }

