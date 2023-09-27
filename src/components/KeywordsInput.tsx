import { Autocomplete, Chip, TextField } from '@mui/material';

/**
 * Properties for the component `KeywordField`
 */
export type KeywordFieldProps = {
    /**
     * The list of existing keywords
     */
    keywords: string[];

    /**
     * The callback of change the kist of keywords
     * @param newKeywords the new keywords
     */
    onChange: (newKeywords: string[]) => void;
}

/**
 * The component for the edit the keywords
 *
 * @param keywords The list of existing keywords
 * @param onChange The callback of change the kist of keywords
 * @constructor
 */
export default function KeywordsInput({keywords, onChange}: KeywordFieldProps) {
    const handleChange = (newKeywords: string[]): void => {
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