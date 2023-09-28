import React, { JSX } from 'react';
import './MainContent.css';
import { ResponsiveSize } from '../reponsive/ResponsiveModel';

export type MainContentProps = {
    size: ResponsiveSize;
    children: React.ReactNode;
}

export default function MainContent({size, children}: MainContentProps) {
    return (
        <main className={`main-content ${size}`}>
            {children}
        </main>
    )
}