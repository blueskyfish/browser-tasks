import { mdiFileDocumentPlusOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../features/hooks';
import { Task } from '../../features/tasks/task';
import { createTaskItem } from '../../features/tasks/taskThunks';
import { emptyTask } from '../../features/tasks/taskUtils';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';

export type newLoaderResponse = {
    task: Task;
}

export function newLoader() {
    return {task: emptyTask()};
}

export default function NewTask() {
    const {setSideMenu} = useContext(SidebarContext);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {task} = useLoaderData() as newLoaderResponse;
    useEffect(() => {
        setSideMenu('new');
    }, [setSideMenu]);

    const handleSubmit = (task: Task): void => {
        dispatch(createTaskItem(task));
        navigate('/');
    };

    return (
        <>
            <Header title={'New Task'} icon={mdiFileDocumentPlusOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}