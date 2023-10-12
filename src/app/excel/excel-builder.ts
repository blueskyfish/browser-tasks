import dayjs from 'dayjs';
import * as XLSX from 'xlsx';
import { ExportTask } from './export-task';

const toFilename = (): string => {
    return `BrowserTasks-${dayjs().format('YYYY-MM-DD-HH-mm')}.xlsx`;
}

export default function excelBuilder(taskList: ExportTask[]): boolean {
    try {
        const ws = XLSX.utils.json_to_sheet(taskList);
        const wb: XLSX.WorkBook = {
            Sheets: {'tasks': ws},
            SheetNames: ['tasks'],
        };
        const filename = toFilename();
        XLSX.writeFileXLSX(wb, filename, {bookType: 'xlsx', type: 'array'});
        console.info('Export %s tasks into %s', taskList.length, filename);
        return true;
    } catch (e) {
        console.error('Export task-list are failed =>', e);
        return false;
    }
}
