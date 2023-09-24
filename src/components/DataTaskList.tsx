import {
    mdiCheckboxBlankCircleOutline,
    mdiCheckboxMarkedCircleOutline,
    mdiDotsSquare,
    mdiSquareOutline,
    mdiStarBoxOutline,
    mdiStarOutline
} from '@mdi/js';
import Icon from '@mdi/react';
import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import React from 'react';
import { Task, TaskStatus } from '../store/TaskModel';
import './DataTaskList.css';

export type DataTaskListProps = {
    onTask: (task: Task) => void;
    taskList: Task[];
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
        width: '60%',
    },
    {
        dataKey: 'done',
        label: 'Done',
        width: '5%'
    },
    {
        dataKey: 'keywords',
        label: 'Keywords',
        width: '30%'
    }
];

const taskIcon = (status: TaskStatus) => {
    switch (status) {
        default:
            return <Icon path={mdiDotsSquare} size={1} />
        case 'normal':
            return <Icon path={mdiSquareOutline} size={1}/>;
        case 'important':
            return <Icon path={mdiStarBoxOutline} size={1}/>;
        case 'highly':
            return <Icon path={mdiStarOutline} size={1}/>;
    }
};

const taskData = (task: Task, col: keyof Task) => {
    switch (col) {
        case 'status':
            return (<Tooltip title={task.status ?? 'No Status'}>{taskIcon(task.status)}</Tooltip>);
        case 'title':
            return (<span className="task-title">{task.title}</span>);
        case 'done':
            return (
                (task.done || false) ?
                    <Icon path={mdiCheckboxMarkedCircleOutline} size={1}/> :
                    <Icon path={mdiCheckboxBlankCircleOutline} size={1}/>
            );
        case 'keywords':
            return (
                <>
                    {task.keywords?.map((keyword, index) => (
                        <Chip label={keyword} key={index} sx={{marginRight: '0.25rem'}}/>
                    ))}
                </>
            );
    }
};


export default function DataTaskList({taskList, onTask}: DataTaskListProps) {
    return (
        <Paper className="data-task-list">
            <TableContainer>
                <Table stickyHeader>
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
                                        {taskData(task, col.dataKey)}
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