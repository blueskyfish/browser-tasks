
export enum ResponsiveSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export type ResponsiveState = {
    size: ResponsiveSize;
};

export function getOtherSize(size: ResponsiveSize): 'small' | 'medium' {
    return size === ResponsiveSize.xs || size === ResponsiveSize.md ? 'small' : 'medium';
}