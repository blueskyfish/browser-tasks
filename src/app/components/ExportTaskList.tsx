import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { Task } from '../../features/tasks/task';
import { ExportTask } from '../exporting/exporter-task';
import './ExportTaskList.css';
import CheckBoxTaskList from './CheckBoxTaskList';
import FormatChoose from './FormatChoose';

export type ExportTaskListProps = {
    taskList: Task[];
    onExport: (taskList: ExportTask[]) => void;
    onFormat: (format: string) => void;
};

export default function ExportTaskList({taskList, onExport, onFormat}: ExportTaskListProps) {
    const [selected, setSelected] = useState(taskList.map((t: Task) => t.id));

    const handleExport = () => {
        const exportedTaskList = taskList
            .filter((t: Task) => selected.includes(t.id))
            .map((t: Task): ExportTask => {
                return {
                    title: t.title,
                    status: t.status,
                    content: t.content,
                    dueDate: t.dueDate,
                    done: t.done ? 'Yes' : 'No',
                    keywords: t.keywords.join(', ')
                };
            });
        onExport(exportedTaskList);
    };

    const handleSelection = (selected: string[]) => {
        setSelected(selected);
    };

    const numSelected = selected.length;
    const rowCount = taskList.length;

    return (
        <Paper className="export-task-list">
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <div className="export-padding">
                        <Button color="primary" variant={'contained'} onClick={() => handleExport()}>
                            Export
                        </Button>

                        <Typography variant="body2" pt={2}>
                            Tasks ({numSelected} / {rowCount})
                        </Typography>

                        <FormatChoose label="Export format" format="csv" onFormat={onFormat}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={9}>
                    <div className="export-padding">
                        <CheckBoxTaskList taskList={taskList} selected={selected} onSelection={handleSelection}/>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}