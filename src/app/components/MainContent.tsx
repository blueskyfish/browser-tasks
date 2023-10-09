import React from 'react';
import './MainContent.css';
import { useResponsiveSize } from '../media-query/useResponsiveSize';

export type MainContentProps = {
    children: React.ReactNode;
}

export default function MainContent({children}: MainContentProps) {
    const size = useResponsiveSize();
    return (
        <main className={`main-content ${size}`}>
            {children}
        </main>
    )
}