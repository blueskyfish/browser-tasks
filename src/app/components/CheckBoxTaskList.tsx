import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Task } from '../../features/tasks/task';
import DoneLabel from './DoneLabel';
import TaskStatusIcon from './TaskStatusIcon';

type EnhancedTableHeadProp = {
    numSelected: number;
    rowCount: number;
    onSelectAll: () => void;
}

const EnhancedTableHead = ({numSelected, rowCount, onSelectAll}: EnhancedTableHeadProp) => (
    <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={() => onSelectAll()}
                />
            </TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="right">Done</TableCell>
        </TableRow>
    </TableHead>
);

type EnhancedTableTaskProps = {
    task: Task,
    selected: boolean;
    onSelect: (task: Task) => void;
}

const EnhancedTableTask = ({task, selected, onSelect}: EnhancedTableTaskProps) => {
    return (
        <TableRow hover selected={selected} onClick={() => onSelect(task)}>
            <TableCell padding="checkbox">
                <Checkbox color="primary" checked={selected}/>
            </TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="center">
                <TaskStatusIcon status={task.status} tooltip={task.status ?? 'No status'}/>
            </TableCell>
            <TableCell align="center">{task.dueDate ?? '-'}</TableCell>
            <TableCell align="right">
                <DoneLabel isDone={task.done ?? false} tooltip={(task.done ?? false) ? 'Done' : 'Open'}/>
            </TableCell>
        </TableRow>
    );
}

export type TaskListProps = {
    taskList: Task[],
    selected: string[];
    onSelection: (idList: string[]) => void;
};

export default function CheckBoxTaskList({taskList, selected, onSelection}: TaskListProps) {
    const handleSelectAll = () => {
        onSelection(taskList.map((t: Task) => t.id));
    };

    const handleSelectTask = (task: Task) => {
        const newSelected = [...selected];
        const index = newSelected.findIndex((id: string) => id === task.id);
        if (index < 0) {
            newSelected.push(task.id);
        } else {
            newSelected.splice(index, 1);
        }
        onSelection(newSelected);
    };

    return (
        <TableContainer>
            <Table sx={{minWidth: '100%'}}>
                <EnhancedTableHead numSelected={selected.length} rowCount={taskList.length} onSelectAll={handleSelectAll}/>
                <TableBody>
                    {taskList.map((task: Task) => {
                        const isSelected = selected.includes(task.id);
                        return (<EnhancedTableTask key={task.id} task={task} selected={isSelected} onSelect={handleSelectTask}/>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}