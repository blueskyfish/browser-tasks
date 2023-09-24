import { mdiHomeOutline } from '@mdi/js';
import { Grid, Paper } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTaskList from '../components/DataTaskList';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';
import './HomePage.css';

export default function HomePage() {
    const { setSideMenu } = useContext(SidebarContext);
    const { state} = useContext(DataContext);
    const { taskMap } = state;
    const taskList = Object.values(taskMap);
    const navigate = useNavigate();

    useEffect(() => {
        setSideMenu('home');
    }, [setSideMenu]);

    const handleTask = (task: Task): void => {
        console.log('Task =>', task);
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title={"Home"} icon={mdiHomeOutline}/>
            <DataTaskList taskList={taskList} onTask={handleTask}/>
        </>

    );
}