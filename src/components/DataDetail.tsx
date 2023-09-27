import { mdiFileEditOutline, mdiHome } from '@mdi/js';
import Icon from '@mdi/react';
import { Fab, Paper } from '@mui/material';
import { Task } from '../store/TaskModel';
import ContentBox from './ContentBox';
import './DataDetail.css';
import KeywordsLine from './KeywordsLine';
import MissingData from './MissingData';
import TitleBar from './TitleBar';

export type DataDetailProps = {
    task: Task;
    onTask: (task: Task) => void;
}
export default function DataDetail({task, onTask}: DataDetailProps) {
    if (!task) {
        return (
            <MissingData title="Missing data" message="Task entity is not available!" action={{ href: '/', label: 'Task List' }}/>
        );
    }
    return (
        <Paper className="data-task-detail">
            <div className="data-task-padding">
                <TitleBar icon={mdiHome} title={task.title}/>
                <ContentBox label="Task"  content={task.content}/>
                <KeywordsLine keywords={task.keywords} title="Task Keywords"/>
                <Fab color="secondary" size="small" className="data-fab" onClick={() => onTask(task)}>
                    <Icon path={mdiFileEditOutline} size={1}/>
                </Fab>
            </div>
        </Paper>
    )
}