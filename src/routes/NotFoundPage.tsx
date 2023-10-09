import { mdiAlertCircleOutline, mdiHome } from '@mdi/js';
import Icon from '@mdi/react';
import { Alert, AlertTitle, Button, Paper } from '@mui/material';
import Header from '../components/Header';

export default function NotFoundPage() {
    return (
        <>
            <Header title={'Not found'} icon={mdiAlertCircleOutline} />
            <Paper>
                <Alert color="error">
                    <AlertTitle>Not Foung</AlertTitle>
                    <p>Something went wrong. The page was not found.</p>
                </Alert>
                <Button href="/">
                    <Icon path={mdiHome} size={1}/> Back to Home
                </Button>
            </Paper>
        </>
    )
}