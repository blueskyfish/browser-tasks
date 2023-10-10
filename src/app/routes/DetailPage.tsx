import { mdiFileDocumentOutline } from '@mdi/js';
import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../features/hooks';
import { Task } from '../../features/tasks/task';
import { selectTaskById } from '../../features/tasks/taskSelectors';
import { saveTaskItem } from '../../features/tasks/taskThunks';
import DataDetail, { DetailAction } from '../components/DataDetail';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';


export type DetailLoaderResponse = {
    id: string;
}

export function detailLoader({params}: LoaderFunctionArgs): DetailLoaderResponse {
    return {id: params.id ?? ''};
}

export default function DetailPage() {
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = useSelector(selectTaskById(id));
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
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