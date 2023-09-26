import { Autocomplete, Chip, TextField } from '@mui/material';
import { useState } from 'react';

export type KeywordFieldProps = {
    keywords: string[];
    onChange: (newKeywords: string[]) => void;
}

export default function KeywordField({keywords, onChange}: KeywordFieldProps) {
    console.log('> Task Keywords =>', keywords);
    const handleChange = (newKeywords: string[]): void => {
        console.log('> New keywords =>', newKeywords);
        onChange(newKeywords);
    };

    return (
        <Autocomplete
            multiple
            id="task__keywords"
            options={keywords}
            freeSolo
            defaultValue={keywords}
            renderTags={(value, getTagProps) => {
                return (
                    value.map((option, index) => (
                            <Chip variant="filled" label={option} {...getTagProps({index})}/>
                        )
                    )
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Task Keywords"
                />
            )}
            onChange={(e, value) => handleChange(value)}
        />
    );
}