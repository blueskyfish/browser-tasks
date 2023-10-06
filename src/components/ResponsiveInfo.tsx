import { ResponsiveSize, useResponsiveSize } from '../media-query/useResponsiveSize';
import './ResponsiveInfo.css';

export type ResponseInfoProps = {
    size: ResponsiveSize;
}
export default function ResponsiveInfo({size}: ResponseInfoProps) {
    return (
        <p className={`responsive-info ${size}`}>
            <span className="label">Responsive </span><b className="size">{size}</b>
        </p>
    );
}