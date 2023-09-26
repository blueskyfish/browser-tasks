import { mdiTextBoxOutline } from '@mdi/js';
import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataDetail from '../components/DataDetail';
import Header from '../components/Header';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';

export type DetailLoaderResponse = {
    id: string;
}

export function detailLoader({params}: LoaderFunctionArgs): DetailLoaderResponse {
    return { id: params.id ?? '' };
}

export default function DetailPage() {
    const { state} = useContext(DataContext);
    const { taskMap } = state;
    const { id } = useLoaderData() as DetailLoaderResponse;
    const task = taskMap[id] ?? null;
    const navigate = useNavigate();

    const handleTask = (task: Task): void => {
        navigate(`/task/${task.id}/edit`);
    };

    return (
        <>
            <Header title="Detail" icon={mdiTextBoxOutline}/>
            { task !== null && <DataDetail task={task} onTask={handleTask}/> }
        </>
    )
}