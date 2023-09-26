import { Button, Grid, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Task } from '../store/TaskModel';
import './DataForm.css';
import StatusSelect from './StatusSelect';

export type DataFormProps = {
    task: Task;
    onSubmit: (task: Task) => void;
}
export default function DataForm({task, onSubmit}: DataFormProps) {
    const { register, handleSubmit} = useForm<Task>();
    console.log('> Data Form task =>', task);

    if (!task) {
        return (
            <Paper className="data-task-form">
                <p>No task available</p>
            </Paper>
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
                            defaultValue={task.title}
                            helperText="Task title is required"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            {...register('title')}
                        />
                    </Grid>
                    <Grid item md={4}>
                        DueDate
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
                        Keywords
                    </Grid>
                </Grid>

                <Button color="primary" title="Save" variant="contained" type="submit">Save</Button>
            </form>
        </Paper>
    );
}