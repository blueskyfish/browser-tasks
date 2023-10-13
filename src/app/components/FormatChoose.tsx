import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

export type FormatChooseProps = {
    label: string;
    format: string
    onFormat: (format: string) => void;
}

const formatHelpText: Record<string, string> = {
    csv: 'Comma-separated values',
    json: 'Java Script Object Notation',
    sheet: 'Spreadsheets like MS Excel',
    others: 'Please select the format',
}

const getHelp = (format: string): string => {
    return formatHelpText[format] ?? formatHelpText['others'];
}

/**
 * Choose the export- or import format from a radio group
 * @param label the label of the control
 * @param format
 * @param onFormat
 * @constructor
 */
export default function FormatChoose({label, format, onFormat}: FormatChooseProps) {
    const [formatText, setFormatText] = useState(format);
    const handleFormatChange = (format: string) => {
        setFormatText(format);
        onFormat(format);
    }
    return (
        <FormControl fullWidth={true} sx={{paddingTop: 'var(--gap-2);'}} size="small">
            <FormLabel>{label}</FormLabel>
            <RadioGroup
                defaultValue={format}
                onChange={(ex, value) => handleFormatChange(value)}
            >
                <FormControlLabel value="csv" control={<Radio size="small"/>} label="CSV"/>
                <FormControlLabel value="json" control={<Radio size="small"/>} label="JSON"/>
                <FormControlLabel value="sheet" control={<Radio size="small"/>} label="XLSX"/>
            </RadioGroup>
            <FormHelperText>{getHelp(formatText)}</FormHelperText>
        </FormControl>
    )
}