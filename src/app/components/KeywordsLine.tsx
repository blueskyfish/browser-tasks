import { Chip } from '@mui/material';
import './KeywordsLine.css';
import { useResponsiveSize, getThemeDense } from '../media-query/useResponsiveSize';

export type KeywordListProps = {
    title?: string;
    keywords: string[];
}

export default function KeywordsLine({title, keywords}: KeywordListProps) {
    const size = useResponsiveSize();
    const className = 'keyword-line' + (!!title ? ' label' : '');
    if (!Array.isArray(keywords) || keywords.length === 0) {
        return (
            <div className={className}>
                {title && (<p className="title">{<title></title>}</p>)}
                <div className="chip-line">
                    -
                </div>
            </div>
        );
    }
    return (
        <div className={className}>
            {title && (<p className="title">{title}</p>)}
            <div className="chip-line">
                {keywords.map((k: string, index) => (
                    <Chip key={index} label={k} variant="filled" size={getThemeDense(size)} sx={{mr: '0.25rem', mt: '2px'}}/>
                ))}
            </div>
        </div>
    );
}