import { mdiFileEditOutline } from '@mdi/js';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import DataContext from '../store/DataContext';
import { createAction, DataActionKind } from '../store/DataReducer';
import { Task } from '../store/TaskModel';
import { DetailLoaderResponse } from './DetailPage';


export default function EditPage() {
    const { getState, dispatch } = useContext(DataContext);
    const { taskMap } = getState();
    const { id } = useLoaderData() as DetailLoaderResponse;
    const task = taskMap[id] ?? null;
    const navigate = useNavigate();

    console.log('> Edit task =>', task);

    const handleSubmit = (task: Task): void => {
        dispatch(createAction(DataActionKind.UpdateTask, task))
            .catch((reason) => console.error(reason));
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title="Edit" icon={mdiFileEditOutline} />
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}