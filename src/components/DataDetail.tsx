import { mdiHome } from '@mdi/js';
import { Paper, Typography } from '@mui/material';
import { Task } from '../store/TaskModel';
import './DataDetail.css';
import TitleBar from './TitleBar';

export type DataDetailProps = {
    task: Task;
}
export default function DataDetail({task}: DataDetailProps) {
    return (
        <Paper className="data-task-detail">
            <div style={{padding: 'var(--gap-1) var(--gap-2)'}}>
                <TitleBar icon={mdiHome} title={task.title}/>
                <p>{task.content}</p>
            </div>
        </Paper>
    )
}