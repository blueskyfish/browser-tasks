import { mdiFileEditOutline, mdiHome } from '@mdi/js';
import Icon from '@mdi/react';
import { Fab, Paper } from '@mui/material';
import { Task } from '../store/TaskModel';
import ContentBox from './ContentBox';
import './DataDetail.css';
import TitleBar from './TitleBar';

export type DataDetailProps = {
    task: Task;
    onTask: (task: Task) => void;
}
export default function DataDetail({task, onTask}: DataDetailProps) {
    return (
        <Paper className="data-task-detail">
            <div className="data-task-padding">
                <TitleBar icon={mdiHome} title={task.title}/>
                <ContentBox label="Task"  content={task.content}/>
                <Fab color="secondary" size="small" className="data-fab" onClick={() => onTask(task)}>
                    <Icon path={mdiFileEditOutline} size={1}/>
                </Fab>
            </div>
        </Paper>
    )
}