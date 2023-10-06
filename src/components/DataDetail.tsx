import { mdiFileEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, Fab, Paper } from '@mui/material';
import { emptyTask, Task } from '../store/TaskModel';
import ContentBox from './ContentBox';
import './DataDetail.css';
import DoneButton from './DoneButton';
import DoneLabel from './DoneLabel';
import KeywordsLine from './KeywordsLine';
import MissingData from './MissingData';
import { getTaskStatusIcon } from './TaskStatusIcon';
import TitleBar from './TitleBar';

export type DetailAction = 'edit' | 'done';

export type DataDetailProps = {
    task?: Task;
    onTask: (action: DetailAction, task: Task) => void;
}
export default function DataDetail({task, onTask}: DataDetailProps) {
    const handleDone = (isDone: boolean): void => {
        onTask('done', {
            ...task ?? emptyTask(),
            done: isDone,
        });
    };

    if (!task) {
        return (
            <MissingData title="Missing data" message="Task entity is not available!" action={{ href: '/', label: 'Task List' }}/>
        );
    }
    return (
        <Paper className="data-task-detail">
            <div className="data-task-padding">
                <TitleBar icon={getTaskStatusIcon(task.status)} title={task.title}/>
                <ContentBox label="Task"  content={task.content}/>
                <KeywordsLine keywords={task.keywords} title="Task Keywords"/>
                <div className="button-bar">
                    <DoneLabel isDone={task.done} label={task.done ? 'Done' : 'Open'}/>
                    <DoneButton isDone={task.done} setDone={handleDone}/>
                    <Button href="/" variant="outlined" sx={{marginLeft: 'var(--gap-2)'}}>Task List</Button>
                </div>
                <Fab color="secondary" size="small" className="data-fab" onClick={() => onTask('edit', task)}>
                    <Icon path={mdiFileEditOutline} size={1}/>
                </Fab>
            </div>
        </Paper>
    )
}