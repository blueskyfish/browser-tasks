import { mdiHomeOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTaskList from '../components/CardTaskList';
import DataTaskList from '../components/DataTaskList';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { ResponsiveSize, useResponsiveSize } from '../media-query/useResponsiveSize';
import DataContext from '../store/DataContext';
import { Task } from '../store/TaskModel';
import './HomePage.css';

export default function HomePage() {
    const { setSideMenu } = useContext(SidebarContext);
    const { getTaskList } = useContext(DataContext);
    const taskList = getTaskList();
    const size = useResponsiveSize();
    const navigate = useNavigate();

    useEffect(() => {
        setSideMenu('home');
    }, [setSideMenu]);

    const handleTask = (task: Task): void => {
        navigate(`/task/${task.id}`);
    };

    const isSmallSize = size === ResponsiveSize.xs

    return (
        <>
            <Header title={"Home"} icon={mdiHomeOutline}/>
            {!isSmallSize && (<DataTaskList taskList={taskList} onTask={handleTask}/>)}
            {isSmallSize && (<CardTaskList taskList={taskList} onTask={handleTask}/>)}
        </>

    );
}