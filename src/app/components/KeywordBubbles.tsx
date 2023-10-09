import { Badge } from '@mui/material';
import { KeywordCount } from '../store/DataSelector';
import './KeywordBubbles.css';

export type KeywordsListProps = {
    counts: KeywordCount;
    onFilter: (keyword: string) => void;
}

export default function KeywordBubbles({counts, onFilter}: KeywordsListProps) {
    return (
        <div className="keyword-bubbles">
            {Object.entries(counts).map(([keyword, count], index: number) => (
                <Badge key={index} badgeContent={count} color="primary" sx={{ margin: '4px 2px'}}>
                    <div
                        className="keyword-bubble"
                        onClick={() => onFilter(keyword)}
                    >
                        {keyword}
                    </div>
                </Badge>
            ))}
        </div>
    )
}