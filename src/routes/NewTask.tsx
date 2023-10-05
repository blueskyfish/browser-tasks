import { mdiFileDocumentPlusOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { withAddTask } from '../store/DataAction';
import DataContext from '../store/DataContext';
import { emptyTask, Task } from '../store/TaskModel';

export type newLoaderResponse = {
    task: Task;
}

export function newLoader() {
    return {task: emptyTask()};
}

export default function NewTask() {
    const {setSideMenu} = useContext(SidebarContext);
    const {dispatch} = useContext(DataContext);
    const navigate = useNavigate();
    const {task} = useLoaderData() as newLoaderResponse;
    useEffect(() => {
        setSideMenu('new');
    }, [setSideMenu]);

    const handleSubmit = (task: Task): void => {
        dispatch(withAddTask(task));
        navigate('/');
    };

    return (
        <>
            <Header title={'New Task'} icon={mdiFileDocumentPlusOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}