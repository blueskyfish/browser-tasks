import { mdiFileDocumentPlusOutline, mdiHomeOutline, mdiLightbulbOnOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Avatar, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useContext } from 'react';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import { useNavigateHelp, useNavigateHome, useNavigateNew } from '../hooks/navigate';
import { isSmallResponse, useResponsiveSize } from '../media-query/useResponsiveSize';
import avatar from './avatar.jpg';
import ResponsiveInfo from './ResponsiveInfo';
import './Sidebar.css';
import SidebarFilter from './SidebarFilter';
import Version from './Version';

export default function Sidebar() {
    const navHome = useNavigateHome();
    const navNew = useNavigateNew();
    const navHelp = useNavigateHelp();
    const {sideMenu} = useContext(SidebarContext);
    const size = useResponsiveSize();
    const isSelected = (name: SideMenu): boolean => name === sideMenu;

    const showText = !isSmallResponse(size);
    const avatarSize = showText ? '96px' : '36px';
    const margin = showText ? '1rem auto 0.75rem' : '1rem auto 0.25rem';
    return (
        <aside className={`sidebar ${size}`}>
            <Avatar
                alt={'Browser Tasks'}
                src={avatar}
                sx={{width: avatarSize, height: avatarSize, margin}}
            />
            <MenuList>
                <MenuItem key={'home'} onClick={() => navHome() } selected={isSelected('home')}>
                    <ListItemIcon>
                        <Icon path={mdiHomeOutline} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>Home</ListItemText>)}
                </MenuItem>
                <MenuItem key={'new'} onClick={() => navNew()} selected={isSelected('new')}>
                    <ListItemIcon>
                        <Icon path={mdiFileDocumentPlusOutline} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>New Task</ListItemText>)}
                </MenuItem>
                <Divider/>
                <MenuItem key={'help'} onClick={() => navHelp() } selected={isSelected('help')}>
                    <ListItemIcon>
                        <Icon path={mdiLightbulbOnOutline} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>Help</ListItemText>)}
                </MenuItem>
            </MenuList>
            <SidebarFilter size={size} />
            <ResponsiveInfo size={size}/>
            <Version size={size}/>
        </aside>
    );
}