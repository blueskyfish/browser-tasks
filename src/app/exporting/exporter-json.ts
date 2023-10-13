import FileSaver from 'file-saver';
import { ExportTask } from './exporter-task';
import { toFilename } from './exporter-util';

export default function exporterJson(taskList: ExportTask[]): boolean{
    try {

        const text = JSON.stringify(taskList, null, 2);
        const buffer = new globalThis.Blob([text], { type: 'application/json'})
        const filename = toFilename('json');
        FileSaver.saveAs(buffer, filename);
        console.info('Export %s tasks into %s', taskList.length, filename);
        return true;
    } catch (e) {
        console.error('Export task-list are failed =>', e);
        return false;
    }
}