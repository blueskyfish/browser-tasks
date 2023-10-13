import { mdiMicrosoftExcel } from '@mdi/js';
import { Alert, AlertTitle } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from '../../features/hooks';
import { selectFilteredTaskList } from '../../features/tasks/taskSelectors';
import ExportTaskList from '../components/ExportTaskList';
import Header from '../components/Header';
import SidebarContext from '../context/sidebar.context';
import { exporterFactory } from '../exporting/exporter-factory';
import exporterSheet from '../exporting/exporter-sheet';
import { ExportTask } from '../exporting/exporter-task';

enum ExportNotify {
    Nothing,
    Success,
    Error,
}

export default function ExportPage() {
    const {setSideMenu} = useContext(SidebarContext);
    const [notify, setNotify] = useState(ExportNotify.Nothing);
    const [format, setFormat] = useState("csv");
    const taskList = useAppSelector(selectFilteredTaskList);

    const handleExport = (list: ExportTask[]): void => {
        const exporter = exporterFactory(format);
        if (!!exporter && exporter(list)) {
            setNotify(ExportNotify.Success);
        } else {
            setNotify(ExportNotify.Error);
        }
    };

    const handleFormat = (format: string): void => {
        setFormat(format);
    }

    const isSuccess = notify === ExportNotify.Success;
    const isError = notify === ExportNotify.Error;

    useEffect(() => {
        setSideMenu('export');
    }, [setSideMenu]);

    return (
        <>
            <Header title="Export from tasklist" icon={mdiMicrosoftExcel} />
            {isSuccess && (
                <Alert color="success" sx={{ margin: 'var(--gap-2)'}}>
                    <AlertTitle>Export success</AlertTitle>
                    <p>Your task list is exported successful.</p>
                </Alert>
            )}
            {isError && (
                <Alert color="error" sx={{ margin: 'var(--gap-2)'}}>
                    <AlertTitle>Export failed</AlertTitle>
                    <p>Your export of task list is failed.</p>
                </Alert>
            )}
            <ExportTaskList taskList={taskList} onExport={handleExport} onFormat={handleFormat}/>
        </>
    )
}