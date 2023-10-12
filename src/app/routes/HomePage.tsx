import { mdiHomeOutline } from '@mdi/js';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../../features/tasks/task';
import { selectFilteredTaskList } from '../../features/tasks/taskSelectors';
import CardTaskList from '../components/CardTaskList';
import DataTaskList from '../components/DataTaskList';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { useNavigateDetail } from '../hooks/navigate';
import { ResponsiveSize, useResponsiveSize } from '../media-query/useResponsiveSize';
import './HomePage.css';

export default function HomePage() {
    const {setSideMenu} = useContext(SidebarContext);
    const taskList = useSelector(selectFilteredTaskList);
    const size = useResponsiveSize();
    const navDetail = useNavigateDetail();

    useEffect(() => {
        setSideMenu('home');
    }, [setSideMenu]);

    const handleTask = (task: Task): void => {
        navDetail(task.id);
    };

    const isSmallSize = size === ResponsiveSize.xs;

    return (
        <>
            <Header title={'Home'} icon={mdiHomeOutline}/>
            {!isSmallSize && (<DataTaskList taskList={taskList} onTask={handleTask}/>)}
            {isSmallSize && (<CardTaskList taskList={taskList} onTask={handleTask}/>)}
        </>

    );
}