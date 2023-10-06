import pkg from '../../package.json';
import './Version.css';
import { ResponsiveSize } from '../media-query/useResponsiveSize';

export type VersionProps = {
    size: ResponsiveSize;
};

export default function Version({ size }: VersionProps) {
    return (<p className={`version ${size}`}>{pkg.version}</p>)
}