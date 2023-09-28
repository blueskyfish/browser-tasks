import { Chip } from '@mui/material';
import { getOtherSize, ResponsiveSize } from '../reponsive/ResponsiveModel';
import './KeywordsLine.css';

export type KeywordListProps = {
    title?: string;
    size: ResponsiveSize
    keywords: string[];
}

export default function KeywordsLine({size, title, keywords}: KeywordListProps) {
    const className = 'keyword-line' + (!!title ? ' label' : '');
    const chipSize = getOtherSize(size);
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
                    <Chip key={index} label={k} variant="filled" size={chipSize} sx={{marginRight: '0.25rem'}}/>
                ))}
            </div>
        </div>
    );
}