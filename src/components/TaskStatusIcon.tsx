import { mdiDotsSquare, mdiSquareOutline, mdiStarBoxOutline, mdiStarOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import React from 'react';
import { TaskStatus } from '../store/TaskModel';

export type TaskIconProps = {
    status: TaskStatus;
    size?: number;
    tooltip?: string;
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
    let icon;
    switch (status) {
        default:
            icon = (<Icon path={mdiDotsSquare} size={size ?? 1} />);
            break;
        case 'normal':
            icon = (<Icon path={mdiSquareOutline} size={size ?? 1}/>);
            break;
        case 'important':
            icon = (<Icon path={mdiStarBoxOutline} size={size ?? 1}/>);
            break;
        case 'highly':
            icon = (<Icon path={mdiStarOutline} size={size ?? 1}/>)
            break;
    }

    if (tooltip) {
        return (
            <Tooltip title={tooltip} placement={"top"}>{icon}</Tooltip>
        );
    }
    return icon;
}