import { mdiDotsSquare, mdiStar, mdiStarHalfFull, mdiStarOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import React from 'react';
import { TaskStatus } from '../../features/tasks/task';

export type TaskIconProps = {
    status: TaskStatus;
    size?: number;
    tooltip?: string;
}

export const getTaskStatusIcon = (status: TaskStatus): string => {
    switch (status) {
        case 'normal':
            return mdiStarOutline;
        case 'important':
            return mdiStarHalfFull;
        case 'highly':
            return mdiStar;
        default:
            return mdiDotsSquare;
    }
}

/**
 * Shows the task status icon from {@link Task.status}
 *
 * @param status the status value
 * @param size the size of the icon (default `1`)
 * @param tooltip the tooltip for the icon (default `null`)
 * @constructor
 */
export default function TaskStatusIcon({status, size, tooltip}: TaskIconProps) {

    if (tooltip) {
        return (
            <Tooltip title={tooltip} placement={"top"}><Icon path={getTaskStatusIcon(status)} size={size ?? 1}/></Tooltip>
        );
    }
    return <Icon path={getTaskStatusIcon(status)} size={size ?? 1}/>;
}