import { Box } from '@mui/material';
import { Task } from '../../features/tasks/task';
import CardTaskItem from './CardTaskItem';

export type CardTaskListProps = {
    taskList: Task[];
    onTask: (task: Task) => void;
}
export default function CardTaskList({taskList, onTask}: CardTaskListProps) {
    return (
        <Box sx={{ padding: 'var(--gap-1)'}}>
            {taskList.map((task: Task, index: number) => (
                <CardTaskItem key={index} task={task} onTask={onTask}/>
            ))}
        </Box>
    )
}