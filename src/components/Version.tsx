import pkg from '../../package.json';
import './Version.css';

export default function Version() {
    return (<p className="version">{pkg.version}</p>)
}