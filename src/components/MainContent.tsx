import React, { JSX } from 'react';
import './MainContent.css';

export type MainContentProps = {
    children: JSX.Element | React.ReactElement;
}

export default function MainContent({children}: MainContentProps) {
    return (
        <main className="main-content">{children}</main>
    )
}