import { Alert, AlertTitle, Link, Paper } from '@mui/material';
import './MissingData.css';

export type MissingDataProps = {
    title: string;
    message: string;
    action: {
        href: string;
        label: string;
    }
}

export default function MissingData({ title, message, action: {href, label}}: MissingDataProps) {
    return (
        <Paper className="missing-data-pager">
            <Alert security="error">
                <AlertTitle>{title}</AlertTitle>
                <p>{message}</p>
                <p>Go back to <Link href={href} variant="body1" underline="hover">{label}</Link></p>
            </Alert>
        </Paper>
    )
}