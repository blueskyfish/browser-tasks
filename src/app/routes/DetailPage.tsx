import { mdiFileDocumentOutline } from '@mdi/js';
import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch } from '../../features/hooks';
import { Task } from '../../features/tasks/task';
import { selectTaskById } from '../../features/tasks/taskSelectors';
import { saveTaskItem } from '../../features/tasks/taskThunks';
import DataDetail, { DetailAction } from '../components/DataDetail';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { useNavigateEdit } from '../hooks/navigate';


export type DetailLoaderResponse = {
    id: string;
}

export function detailLoader({params}: LoaderFunctionArgs): DetailLoaderResponse {
    return {id: params.id ?? ''};
}

export default function DetailPage() {
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = useSelector(selectTaskById(id));
    const dispatch = useAppDispatch();
    const {setSideMenu} = useContext(SidebarContext);
    const navEdit = useNavigateEdit();

    useEffect(() => {
        setSideMenu('detail');
    }, [setSideMenu]);

    const handleTask = (action: DetailAction, task: Task): void => {
        switch (action) {
            case 'edit':
                navEdit(task.id);
                break;
            case 'done':
                dispatch(saveTaskItem(task));
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