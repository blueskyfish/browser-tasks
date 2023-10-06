import { mdiFileDocumentOutline } from '@mdi/js';
import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataDetail, { DetailAction } from '../components/DataDetail';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { withUpdateTask } from '../store/DataAction';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';

export type DetailLoaderResponse = {
    id: string;
}

export function detailLoader({params}: LoaderFunctionArgs): DetailLoaderResponse {
    return {id: params.id ?? ''};
}

export default function DetailPage() {
    const {getTaskList, dispatch} = useContext(DataContext);
    const taskList = getTaskList();
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = taskList.find((t: Task) => t.id === id);
    const navigate = useNavigate();
    const {setSideMenu} = useContext(SidebarContext);

    useEffect(() => {
        setSideMenu('detail');
    }, [setSideMenu]);

    const handleTask = (action: DetailAction, task: Task): void => {
        switch (action) {
            case 'edit':
                navigate(`/task/${task.id}/edit`);
                break;
            case 'done':
                dispatch(withUpdateTask(task));
                break;
        }
    };

    return (
        <>
            <Header title="Detail" icon={mdiFileDocumentOutline}/>
            <DataDetail task={task} onTask={handleTask}/>
        </>
    );
}