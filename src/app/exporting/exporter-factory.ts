import exporterCsv from './exporter-csv';
import exporterJson from './exporter-json';
import exporterSheet from './exporter-sheet';
import { ExportTask } from './exporter-task';

export const exporterFactory = (format: string): (taskList: ExportTask[]) => boolean => {
    switch (format) {
        case 'sheet':
            return exporterSheet;
        case 'csv':
            return exporterCsv;
        case 'json':
            return exporterJson;
    }
    return () => {
        console.error('Unknown format could not exported =>', format);
        return false;
    }
}