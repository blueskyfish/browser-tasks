import { mdiFileDocumentPlusOutline, mdiHomeOutline, mdiLightbulbOnOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Avatar, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useContext } from 'react';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import avatar from './avatar.jpg';
import './Sidebar.css';

export type SidebarProps = {
    onNavigate: (to: string) => void;
}

export default function Sidebar({onNavigate}: SidebarProps) {
    const { sideMenu } = useContext(SidebarContext);
    const isSelected = (name: SideMenu): boolean => name === sideMenu;

    return (
        <aside className={'sidebar'}>
            <Avatar alt={"Browser Tasks"} src={avatar} sx={{ width: '96px', height: '96px', margin: '1rem auto 0.75rem'}} />
            <MenuList>
                <MenuItem key={'home'} onClick={() => onNavigate("/")} selected={isSelected('home')}>
                    <ListItemIcon>
                        <Icon path={mdiHomeOutline} size={1}/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem key={'new'} onClick={() => onNavigate('/new')} selected={isSelected('new')}>
                    <ListItemIcon>
                        <Icon path={mdiFileDocumentPlusOutline} size={1}/>
                    </ListItemIcon>
                    <ListItemText>New Task</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem key={'help'} onClick={() => onNavigate('/help')} selected={isSelected('help')}>
                    <ListItemIcon>
                        <Icon path={mdiLightbulbOnOutline} size={1} />
                    </ListItemIcon>
                    <ListItemText>Help</ListItemText>
                </MenuItem>
            </MenuList>
        </aside>
    );
}