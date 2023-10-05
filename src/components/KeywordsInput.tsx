import { Autocomplete, Chip, TextField } from '@mui/material';
import { getThemeDense, useResponsiveSize } from '../media-query/useResponsiveSize';

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
 * @param size
 * @param keywords The list of existing keywords
 * @param onChange The callback of change the kist of keywords
 * @constructor
 */
export default function KeywordsInput({keywords, onChange}: KeywordFieldProps) {
    const size = useResponsiveSize();
    const handleChange = (newKeywords: string[]): void => {
        onChange(newKeywords);
    };

    return (
        <Autocomplete
            multiple
            id="task__keywords"
            options={keywords}
            freeSolo
            size={'medium'}
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
                    size={getThemeDense(size)}
                />
            )}
            onChange={(e, value) => handleChange(value)}
        />
    );
}