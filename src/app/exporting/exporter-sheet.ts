import * as XLSX from 'xlsx';
import { ExportTask } from './exporter-task';
import { toFilename } from './exporter-util';


export default function exporterSheet(taskList: ExportTask[]): boolean {
    try {
        const ws = XLSX.utils.json_to_sheet(taskList);
        const wb: XLSX.WorkBook = {
            Sheets: {'tasks': ws},
            SheetNames: ['tasks'],
        };
        const filename = toFilename('xlsx');
        XLSX.writeFileXLSX(wb, filename, {bookType: 'xlsx', type: 'array'});
        console.info('Export %s tasks into %s', taskList.length, filename);
        return true;
    } catch (e) {
        console.error('Export task-list are failed =>', e);
        return false;
    }
}
