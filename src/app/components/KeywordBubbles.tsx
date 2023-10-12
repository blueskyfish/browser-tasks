import { Badge } from '@mui/material';
import { KeywordCounter } from '../../features/tasks/task';
import './KeywordBubbles.css';

export type KeywordBubbleProps = {
    counter: KeywordCounter;
    selected: string;
    onFilter: (keyword: string) => void;
}

export default function KeywordBubbles({counter, selected, onFilter}: KeywordBubbleProps) {
    return (
        <div className="keyword-bubbles">
            {Object.entries(counter).map(([keyword, count], index: number) => {
                const className = keyword === selected ? 'keyword-bubble active' : 'keyword-bubble';
                return (
                    <Badge key={index} badgeContent={count} color="primary" sx={{margin: '4px 2px'}}>
                        <div
                            className={className}
                            onClick={() => onFilter(keyword)}
                        >
                            {keyword}
                        </div>
                    </Badge>
                );
            })}
        </div>
    );
}