import { Autocomplete, Chip, TextField } from '@mui/material';
import { getOtherSize, ResponsiveSize } from '../reponsive/ResponsiveModel';

/**
 * Properties for the component `KeywordField`
 */
export type KeywordFieldProps = {
    size: ResponsiveSize;

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
export default function KeywordsInput({size, keywords, onChange}: KeywordFieldProps) {
    const handleChange = (newKeywords: string[]): void => {
        onChange(newKeywords);
    };

    return (
        <Autocomplete
            multiple
            id="task__keywords"
            options={keywords}
            freeSolo
            size={getOtherSize(size)}
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
                    size={getOtherSize(size)}
                />
            )}
            onChange={(e, value) => handleChange(value)}
        />
    );
}