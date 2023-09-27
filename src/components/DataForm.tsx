import { Button, Grid, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { emptyTask, Task } from '../store/TaskModel';
import './DataForm.css';
import DueDatePicker from './DueDatePicker';
import KeywordsInput from './KeywordsInput';
import MissingData from './MissingData';
import StatusSelect from './StatusSelect';

export type DataFormProps = {
    task: Task;
    onSubmit: (task: Task) => void;
}
export default function DataForm({task, onSubmit}: DataFormProps) {
    const { register, setValue, handleSubmit} = useForm<Task>({
        defaultValues: task ?? emptyTask(),
    });
    const handleKeywords = (newKeywords: string[]): void => {
        setValue('keywords', newKeywords);
    };

    const handleDueDate = (dueDate: string | null): void => {
        setValue('dueDate', dueDate);
    };

    if (!task) {
        return (
            <MissingData title="Missing data" message="Task entity is not available!" action={{ href: '/', label: 'Task List'}}/>
        )
    }
    return (
        <Paper className="data-task-form">
            <form className="data-task-padding" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StatusSelect label={"Task Status"} value={task.status} register={register} helpText="Please set the task status"/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            required
                            id="task__title"
                            label="Task Title"
                            helperText="Task title is required"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            {...register('title')}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <DueDatePicker value={task.dueDate ?? ''} onChange={handleDueDate}/>
                    </Grid>
                    <Grid item md={8}>
                        <TextField
                            label="Task Description"
                            multiline={true}
                            rows={4}
                            id="task__content"
                            defaultValue={task.content}
                            fullWidth
                            variant="outlined"
                            {...register('content')}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{marginBottom: 'var(--gap-2)'}}>
                        <KeywordsInput keywords={task.keywords ?? undefined} onChange={(key) => handleKeywords(key)}/>
                    </Grid>
                </Grid>

                <Button color="primary" title="Save" variant="contained" type="submit">Save</Button>
            </form>
        </Paper>
    );
}