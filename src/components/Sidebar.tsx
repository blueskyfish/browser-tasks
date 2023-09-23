import { useTheme } from '@mui/material';
import { JSX } from 'react';
import './Sidebar.css';

export type SidebarProps = {
    children: () => JSX.Element;
};

export default function Sidebar({children}: SidebarProps) {
    const theme = useTheme()
    return (
        <aside className={'sidebar ' + theme.components?.MuiDrawer?.defaultProps?.className}>
            {children()}
        </aside>
    );
}