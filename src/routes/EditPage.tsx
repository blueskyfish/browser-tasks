import { mdiFileEditOutline } from '@mdi/js';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';
import { DetailLoaderResponse } from './DetailPage';


export default function EditPage() {
    const { state} = useContext(DataContext);
    const { taskMap } = state;
    const { id } = useLoaderData() as DetailLoaderResponse;
    const task = taskMap[id] ?? null;
    const navigate = useNavigate();

    const handleSubmit = (task: Task): void => {
        console.log('> Edit submit task =>', task);
    };

    return (
        <>
            <Header title="Edit" icon={mdiFileEditOutline} />
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}