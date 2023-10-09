import { mdiLightbulbOnOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';

export function HelpPage() {
    const {setSideMenu} = useContext(SidebarContext);
    useEffect(() => {
        setSideMenu('help');
    }, [setSideMenu])
    return (
        <Header title={"Help"} icon={mdiLightbulbOnOutline}/>
    )
}