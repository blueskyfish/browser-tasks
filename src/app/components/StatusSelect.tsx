import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { Task, TaskStatus } from '../../features/tasks/task';
import { getThemeDense, useResponsiveSize } from '../media-query/useResponsiveSize';

export type StatusSelectProps = {
    label: string;
    value: TaskStatus;
    helpText?: string;
    register: UseFormRegister<Task>
}
export default function StatusSelect({ label, value, helpText, register}: StatusSelectProps) {
    const size = useResponsiveSize();
    return (
        <FormControl sx={{minWidth: '100%'}} variant="outlined" color="primary">
            <InputLabel id="task__status__select__label">{label}</InputLabel>
            <Select
                required
                labelId="task__status__select__label"
                defaultValue={value}
                label={label}
                size={getThemeDense(size)}
                {...register('status')}
            >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="important">Important</MenuItem>
                <MenuItem value="highly">Very Important</MenuItem>
            </Select>
            {helpText && (<FormHelperText>{helpText}</FormHelperText>)}
        </FormControl>
    );
}