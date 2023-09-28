import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { getOtherSize, ResponsiveSize } from '../reponsive/ResponsiveModel';
import { Task } from '../store/TaskModel';
import './DataTaskList.css';
import DoneLabel from './DoneLabel';
import KeywordsLine from './KeywordsLine';
import TaskStatusIcon from './TaskStatusIcon';

export type DataTaskListProps = {
    onTask: (task: Task) => void;
    taskList: Task[];
    size: ResponsiveSize;
}

interface DataColumn {
    dataKey: keyof Task;
    label: string;
    width: string;
}

const columns: DataColumn[] = [
    {
        dataKey: 'status',
        label: 'Status',
        width: '5%'
    },
    {
        dataKey: 'title',
        label: 'Task',
        width: '40%',
    },
    {
        dataKey: 'done',
        label: 'Done',
        width: '5%'
    },
    {
        dataKey: 'dueDate',
        label: 'Due Date',
        width: '20%',
    },
    {
        dataKey: 'keywords',
        label: 'Keywords',
        width: '30%'
    }
];

const taskData = (task: Task, col: keyof Task, size: ResponsiveSize) => {
    switch (col) {
        case 'status':
            return (<TaskStatusIcon status={task.status} tooltip={task.status ?? 'No status'}/>);
        case 'title':
            return (<span className="task-title">{task.title}</span>);
        case 'done':
            return (
                <DoneLabel isDone={task.done ?? false} tooltip={(task.done ?? false) ? 'Done' : 'Open'}/>
            );
        case 'dueDate':
            if (task.dueDate) {
                return (<span className="task-due-date">{task.dueDate}</span>)
            }
            return (<span className="task-due-date">-</span>)
        case 'keywords':
            return (
                <KeywordsLine size={size} keywords={task.keywords}/>
            );
    }
};


export default function DataTaskList({size, taskList, onTask}: DataTaskListProps) {
    const tableSize= getOtherSize(size);
    return (
        <Paper className="data-task-list">
            <TableContainer>
                <Table size={tableSize} stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell
                                    key={col.dataKey}
                                    align="left"
                                    style={{width: col.width}}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskList.map((task: Task) => (
                            <TableRow
                                key={task.id}
                                hover
                                className="task-row"
                                onClick={() => onTask(task)}
                            >
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.dataKey}
                                        align="left"
                                    >
                                        {taskData(task, col.dataKey, size)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}