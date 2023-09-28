import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import ResponseProvider from '../reponsive/ResponseProvider';
import { ResponsiveState } from '../reponsive/ResponsiveModel';
import './RootPage.css';

export default function RootPage() {
    const [sideMenu, setSideMenu] = useState<SideMenu>(null);
    const navigate = useNavigate();

    const handleNavigate = (url: string): void => {
        navigate(url);
    };

    return (
        <ResponseProvider>
            {(responsive: ResponsiveState) => (
                <SidebarContext.Provider value={{ sideMenu, setSideMenu }}>
                    <div className="appPage">
                        <Sidebar
                            size={responsive.size}
                            onNavigate={handleNavigate}/>
                        <MainContent size={responsive.size}>
                            <Outlet/>
                        </MainContent>
                    </div>
                </SidebarContext.Provider>
            )}
        </ResponseProvider>

    );
}