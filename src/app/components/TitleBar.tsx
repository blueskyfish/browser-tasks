import Icon from '@mdi/react';
import './TitleBar.css';

export type TitleBarProps = {
    icon: string;
    title: string;
}

export default function TitleBar({icon, title}: TitleBarProps) {
    return (
        <div className="title-bar">
            <Icon path={icon} size={2} />
            <h3 className="title">{title}</h3>
        </div>
    )
}