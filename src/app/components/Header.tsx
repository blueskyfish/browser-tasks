import Icon from '@mdi/react';
import './Header.css';

export type HeaderProps = {
    title: string;
    icon: string;
}

export default function Header({title, icon}: HeaderProps) {

    return (
        <div className={'header'}>
            <Icon path={icon} size={1}/>
            <h3>{title}</h3>
        </div>
    );
}