import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export enum ResponsiveSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export const defaultSize = ResponsiveSize.lg;

export function useResponsiveSize(): ResponsiveSize {
    const [size, setSize] = useState(defaultSize);
    const theme = useTheme();

    const xsMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const smMatch = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const mdMatch = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    useEffect(() => {
        // console.log('> Media Query (xs=%s, sm=%s, md=%s)', xsMatch, smMatch, mdMatch);
        if (xsMatch) {
            setSize(ResponsiveSize.xs);
        } else if (smMatch) {
            setSize(ResponsiveSize.sm);
        } else if (mdMatch) {
            setSize(ResponsiveSize.md);
        } else {
            setSize(ResponsiveSize.lg);
        }
    }, [xsMatch, smMatch, mdMatch]);

    return size;
}

export function getThemeDense(size: ResponsiveSize): 'medium' | 'small' {
    if (size === ResponsiveSize.xs || size === ResponsiveSize.sm) {
        return 'small';
    }
    return 'medium';
}