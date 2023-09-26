import { mdiFileDocumentPlusOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { Task } from '../store/TaskModel';

export default function NewTask() {
    const { setSideMenu } = useContext(SidebarContext);
    useEffect(() => {
        setSideMenu('new');
    }, [setSideMenu]);

    const task: Task = {
        id: '',
        title: '',
        content: '',
        status: 'normal',
        done: false,
        dueDate: undefined,
        keywords: []
    };

    const handleSubmit = (task: Task): void => {
        console.log('> Submit new task =>', task);
    };

    return(
        <>
            <Header title={"New Task"} icon={mdiFileDocumentPlusOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}