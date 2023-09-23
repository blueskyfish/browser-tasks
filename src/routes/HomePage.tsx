import { mdiFileDocumentPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="appPage">
            <Sidebar>
                {() => (
                    <MenuList>
                        <MenuItem onClick={() => console.log('New Task')}>
                            <ListItemIcon>
                                <Icon path={mdiFileDocumentPlus} size={1}/>
                            </ListItemIcon>
                            <ListItemText>New Task</ListItemText>
                        </MenuItem>
                    </MenuList>
                )}
            </Sidebar>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}