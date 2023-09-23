import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarContext, { SideMenu } from '../context/sidebar.context';
import './Root.css';

export default function Root() {
    const [sideMenu, setSideMenu] = useState<SideMenu>(null);
    const navigate = useNavigate();
    const handleNavigate = (url: string): void => {
        navigate(url);
    }
    return (
        <SidebarContext.Provider value={{ sideMenu, setSideMenu }}>
            <div className="appPage">
                <Sidebar onNavigate={handleNavigate}/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </SidebarContext.Provider>
    );
}