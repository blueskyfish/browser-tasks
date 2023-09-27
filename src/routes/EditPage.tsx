import { mdiFileEditOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import DataContext from '../store/DataContext';
import { createAction, DataActionKind } from '../store/DataReducer';
import { Task } from '../store/TaskModel';
import { DetailLoaderResponse } from './DetailPage';


export default function EditPage() {
    const {getState, dispatch} = useContext(DataContext);
    const {taskMap} = getState();
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = taskMap[id] ?? null;
    const navigate = useNavigate();
    const {setSideMenu} = useContext(SidebarContext);

    useEffect(() => {
        setSideMenu('edit');
    }, [setSideMenu]);

    const handleSubmit = (task: Task): void => {
        dispatch(createAction(DataActionKind.UpdateTask, task))
            .catch((reason) => console.error(reason));
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title="Edit" icon={mdiFileEditOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}