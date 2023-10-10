import { mdiFileEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { Task } from '../../features/tasks/task';
import ContentBox from './ContentBox';
import { getTaskStatusIcon } from './TaskStatusIcon';

export type CardTaskItemProps = {
    task: Task;
    onTask: (task: Task) => void;
}

export default function CardTaskItem({task, onTask}: CardTaskItemProps) {
    return (
        <Card sx={{marginBottom: 'var(--gap-2)'}}>
            <CardHeader
                avatar={(
                    <Icon path={getTaskStatusIcon(task.status)} size={2}/>
                )}
                title={task.title}
                subheader={task.dueDate ?? '-'}
                action={(
                    <IconButton onClick={() => onTask(task)}>
                        <Icon path={mdiFileEditOutline} size={1}/>
                    </IconButton>
                )}
            />
            <CardContent>
                <ContentBox label="Task Description" content={task.content}/>
            </CardContent>
        </Card>
    );
}