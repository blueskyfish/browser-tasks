import { mdiFileEditOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DataForm from '../components/DataForm';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { withUpdateTask } from '../store/DataAction';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';
import { DetailLoaderResponse } from './DetailPage';


export default function EditPage() {
    const {getTaskList, dispatch} = useContext(DataContext);
    const taskList = getTaskList();
    const {id} = useLoaderData() as DetailLoaderResponse;
    const task = taskList.find((t: Task) => t.id === id);
    const navigate = useNavigate();
    const {setSideMenu} = useContext(SidebarContext);

    useEffect(() => {
        setSideMenu('edit');
    }, [setSideMenu]);

    const handleSubmit = (task: Task): void => {
        dispatch(withUpdateTask(task));
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title="Edit" icon={mdiFileEditOutline}/>
            <DataForm task={task} onSubmit={handleSubmit}/>
        </>
    );
}