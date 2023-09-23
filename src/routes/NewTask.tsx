import { mdiFileDocumentPlusOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';

export default function NewTask() {
    const { setSideMenu } = useContext(SidebarContext);
    useEffect(() => {
        setSideMenu('new');
    }, [setSideMenu]);

    return(
        <Header title={"New Task"} icon={mdiFileDocumentPlusOutline}/>
    )
}