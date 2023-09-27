import { Button } from '@mui/material';

export type DoneButtonProps = {
    isDone: boolean;
    setDone: (isDone: boolean) => void;
}

export default function DoneButton({isDone, setDone}: DoneButtonProps) {
    if (isDone) {
        return (
            <Button variant="outlined" color="info" onClick={() => setDone(false)}>Reopen</Button>
        );
    }
    return (
        <Button variant="outlined" color="success" onClick={() => setDone(true)}>Done</Button>
    );
}