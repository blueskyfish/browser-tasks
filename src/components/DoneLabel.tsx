import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import './DoneLabel.css';

export type DoneLabelProps = {
    isDone: boolean;
    label?: string;
    tooltip?: string;
}

export const getDoneIcon = (isDone: boolean): string => {
    return isDone ? mdiCheckboxMarkedCircleOutline : mdiCheckboxBlankCircleOutline;
};

export default function DoneLabel({isDone, label, tooltip}: DoneLabelProps) {
    const mdiPath = getDoneIcon(isDone);
    if (label) {
        return <div className="done-label">
            <Icon path={mdiPath} size={1}/>
            <span className="label">{label}</span>
        </div>;
    } else if (tooltip) {
        return (
            <Tooltip title={tooltip} placement="top">
                <Icon path={mdiPath} size={1}/>
            </Tooltip>
        );
    }
    return <Icon path={mdiPath} size={1}/>
}