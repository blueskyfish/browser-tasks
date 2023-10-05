import { useResponsiveSize } from '../media-query/useResponsiveSize';
import './ResponsiveInfo.css';

export default function ResponsiveInfo() {
    const size = useResponsiveSize();
    return (
        <p className="small-info">Responsive <b>{size}</b></p>
    );
}