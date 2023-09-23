import { mdiHomeOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';

export default function HomePage() {
    const { setSideMenu } = useContext(SidebarContext);

    useEffect(() => {
        setSideMenu('home');
    }, [setSideMenu])
    return (
      <Header title={"Home"} icon={mdiHomeOutline}/>
    );
}