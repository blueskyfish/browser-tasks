import pkg from '../../../package.json';
import './Version.css';
import { ResponsiveSize } from '../media-query/useResponsiveSize';

export type VersionProps = {
    size: ResponsiveSize;
    state: string;
};

export default function Version({ size, state }: VersionProps) {
    const className = `label ${state !== 'Online' ? 'offline' : 'online'}`;
    return (<p className={`version ${size}`}>
        <span className="info">{pkg.version}</span>
        <span className={className}>{state}</span>
    </p>)
}