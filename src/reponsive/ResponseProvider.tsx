import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDebounceTime } from '../utils/use-debounce-time';
import { ResponsiveContext } from './ResponsiveContext';
import { ResponsiveSize, ResponsiveState } from './ResponsiveModel';

export type ResponseProviderProps = {
    children: (responsiveState: ResponsiveState) => React.ReactNode;
}


export default function ResponseProvider({children}: ResponseProviderProps) {
    const [response, setResponse] = useState<ResponsiveState>({
        size: ResponsiveSize.xs,
    });
    const theme = useTheme();
    const onlySM = useMediaQuery(theme.breakpoints.down('sm'));
    const onlyMD = useMediaQuery(theme.breakpoints.down('md'));
    const onlyLG = useMediaQuery(theme.breakpoints.up('md'));

    const debounceWindowSize = useDebounceTime(50, () => {
        const size: ResponsiveSize = (onlySM ? ResponsiveSize.sm : (onlyMD ? ResponsiveSize.md : (onlyLG ? ResponsiveSize.lg : response.size)));
        if (size !== response.size) {
            console.log('> Update response size =>', size);
            setResponse((state: ResponsiveState) => ({
                ...state,
                size,
            }));
        }
    });

    useEffect(() => {
        window.addEventListener('resize', debounceWindowSize);

        return () => {
            window.removeEventListener('resize', debounceWindowSize);
        }
    }, [debounceWindowSize]);

    useLayoutEffect(() => {
        debounceWindowSize();
    }, [debounceWindowSize]);

    return (
        <ResponsiveContext.Provider value={{ size: response.size }}>
            {children(response)}
        </ResponsiveContext.Provider>
    )
}