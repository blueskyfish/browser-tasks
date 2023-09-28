import { mdiHomeOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTaskList from '../components/DataTaskList';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { ResponsiveContext } from '../reponsive/ResponsiveContext';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';
import './HomePage.css';

export default function HomePage() {
    const { setSideMenu } = useContext(SidebarContext);
    const { getState } = useContext(DataContext);
    const { size } = useContext(ResponsiveContext);
    const { taskMap } = getState();
    const taskList = Object.values(taskMap);
    const navigate = useNavigate();

    useEffect(() => {
        setSideMenu('home');
    }, [setSideMenu]);

    const handleTask = (task: Task): void => {
        navigate(`/task/${task.id}`);
    };

    return (
        <>
            <Header title={"Home"} icon={mdiHomeOutline}/>
            <DataTaskList taskList={taskList} size={size} onTask={handleTask}/>
        </>

    );
}