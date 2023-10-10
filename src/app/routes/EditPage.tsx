import { mdiFileEditOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { Task } from '../../features/tasks/task';
import { selectTaskById } from '../../features/tasks/taskSelectors';
import { saveTaskItem } from '../../features/tasks/taskThunks';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { DetailLoaderResponse } from './DetailPage';


export default function EditPage() {
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = useAppSelector(selectTaskById(id));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {setSideMenu} = useContext(SidebarContext);

    useEffect(() => {
        setSideMenu('edit');
    }, [setSideMenu]);

    const handleSubmit = (task: Task): void => {
        dispatch(saveTaskItem(task));
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title="Edit" icon={mdiFileEditOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}