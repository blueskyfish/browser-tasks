import { Alert, AlertTitle, Slide, Snackbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';

export type OfflineStatus = '' | 'Online' | 'Offline';

export type OfflineProps = {
    children: (status: OfflineStatus) => React.ReactNode;
}

function TransitionDown(props: TransitionProps) {
    // @ts-ignore
    return <Slide {...props} direction="down"/>;
}

export default function Offline({children}: OfflineProps) {
    const [status, setStatus] = useState<OfflineStatus>('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (navigator.onLine) {
            setStatus('Online');
        } else {
            setStatus('Offline');
        }
    }, [setStatus]);

    useEffect(() => {
        const isOnline = () => {
            setStatus('Online');
            setOpen(true);
        };
        const isOffline = () => {
            setStatus('Offline');
            setOpen(true);
        };
        window.addEventListener('online', isOnline);
        window.addEventListener('offline', isOffline);
        return () => {
            console.log('> Remove online / offline');
            window.removeEventListener('online', isOnline);
            window.removeEventListener('offline', isOffline);
        };
    }, [setStatus, setOpen]);

    if (status === '' || !open) {
        return (
            <>
                {children(status)}
            </>
        );
    }

    const message = status !== 'Online' ? 'You are offline...' : 'Your are online...';
    const severity = status !== 'Online' ? 'warning' : 'info';

    return (
        <>
            <Snackbar
                anchorOrigin={{horizontal: 'center', vertical: 'top'}}
                open={open}
                TransitionComponent={TransitionDown}
                autoHideDuration={1600}
                onClose={() => handleClose()}
            >
                <Alert
                    variant="filled"
                    severity={severity}
                >
                    <AlertTitle>Connection</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>

            {children(status)}
        </>
    );
}