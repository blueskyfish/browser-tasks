import { Checkbox, Tooltip } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import './DueDatePicker.css';

export type DueDatePickerProps = {
    value: string | null;
    onChange: (dueDate: string | null) => void
}

const parseDueDate = (value: string | null) => {
    return value ? dayjs(value) : null;
};

const formatDueDate = (value: Dayjs | null): string | null => {
    return value ? dayjs(value).format('YYYY-MM-DD') : null;
};


export default function DueDatePicker({onChange, value}: DueDatePickerProps) {
    const [dueDate, setDueDate] = useState(value);
    const handleCheckbox = (isChecked: boolean): void => {
        if (isChecked) {
            const value = formatDueDate(dayjs());
            setDueDate(value);
            onChange(value);
        } else {
            setDueDate(null);
            onChange(null);
        }
    };
    return (
        <div className="due-date-picker">
            <Tooltip title="Due Date enabled">
                <Checkbox defaultChecked={!!dueDate} onChange={(ev) => handleCheckbox(ev.target.checked)}/>
            </Tooltip>
            <DatePicker
                label="Due Date"
                value={parseDueDate(dueDate)}
                format="YYYY-MM-DD"
                displayWeekNumber
                disablePast
                disabled={!dueDate}
                onChange={(value) => onChange(value ? dayjs(value).format('YYYY-MM-DD') : null)}
            />
        </div>

    );
}