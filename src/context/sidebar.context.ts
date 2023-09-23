import { createContext } from 'react';

export type SideMenu = null | 'home' | 'new' | 'help';

export type SideMenuState = {
    sideMenu: SideMenu;
    setSideMenu: (sideMenu: SideMenu) => void;
}

const SidebarContext = createContext<SideMenuState>({
    sideMenu: null,
    setSideMenu: (sideMenu: SideMenu) => { console.warn('SideMenu is not setting "%s"', sideMenu); }
});

export default SidebarContext;