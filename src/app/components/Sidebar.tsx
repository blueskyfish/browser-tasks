import { mdiFileDocumentPlusOutline, mdiHomeOutline, mdiLightbulbOnOutline, mdiMicrosoftExcel } from '@mdi/js';
import Icon from '@mdi/react';
import { Avatar, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useContext } from 'react';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import { useNavigateExport, useNavigateHelp, useNavigateHome, useNavigateNew } from '../hooks/navigate';
import { isSmallResponse, useResponsiveSize } from '../media-query/useResponsiveSize';
import avatar from './avatar.png';
import Offline from './Offline';
import ResponsiveInfo from './ResponsiveInfo';
import './Sidebar.css';
import SidebarFilter from './SidebarFilter';
import Version from './Version';

export default function Sidebar() {
    const navHome = useNavigateHome();
    const navNew = useNavigateNew();
    const navHelp = useNavigateHelp();
    const navExport = useNavigateExport();
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
                <MenuItem key={'new'} onClick={() => navNew()} selected={isSelected('new')} divider={true}>
                    <ListItemIcon>
                        <Icon path={mdiFileDocumentPlusOutline} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>New Task</ListItemText>)}
                </MenuItem>
                <MenuItem key={'export'} onClick={() => navExport() } selected={isSelected('export')} divider={true}>
                    <ListItemIcon>
                        <Icon path={mdiMicrosoftExcel} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>Exportieren</ListItemText>)}
                </MenuItem>
                <MenuItem key={'help'} onClick={() => navHelp() } selected={isSelected('help')}>
                    <ListItemIcon>
                        <Icon path={mdiLightbulbOnOutline} size={1}/>
                    </ListItemIcon>
                    {showText && (<ListItemText>Help</ListItemText>)}
                </MenuItem>
            </MenuList>
            <SidebarFilter size={size} />
            <ResponsiveInfo size={size}/>
            <Offline>
                {(state) => (<Version size={size} state={state}/>)}
            </Offline>
        </aside>
    );
}