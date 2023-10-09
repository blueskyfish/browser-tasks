import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import './RootPage.css';

export default function RootPage() {
    const [sideMenu, setSideMenu] = useState<SideMenu>(null);
    const navigate = useNavigate();

    const handleNavigate = (url: string): void => {
        navigate(url);
    };

    return (
        <SidebarContext.Provider value={{sideMenu, setSideMenu}}>
            <div className="appPage">
                <Sidebar
                    onNavigate={handleNavigate}/>
                <MainContent>
                    <Outlet/>
                </MainContent>
            </div>
        </SidebarContext.Provider>
    );
}