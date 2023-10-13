import FileSaver from 'file-saver';
import { ExportTask } from './exporter-task';
import { toFilename } from './exporter-util';


const toLine = (values: string []): string => {
    return values
        .map((value) => `${value}`) // convert into string
        .map((text) => text.replaceAll('"', '""')) // escape all double quot
        .map((text) => `"${text}"`) // // quote the text
        .join(';');
}

const toRow = (task: ExportTask): string => {
    return toLine(Object.values(task));
};

const toHeader = (task: ExportTask): string => {
    return toLine(Object.keys(task));
}

export default function exporterCsv(taskList: ExportTask[]): boolean {
    if (!Array.isArray(taskList) || taskList.length === 0) {
        return false;
    }
    try {
        let header: string = '';
        const text = taskList
            .map((task: ExportTask): string => {
                if (header === '') {
                    header = toHeader(task);
                }
                return toRow(task)
            })
            .join('\n');
        const data = [header, text].join('\n');
        const filename = toFilename('csv');
        const buffer = new globalThis.Blob([data], {type: 'text/csv'});
        FileSaver.saveAs(buffer, filename);
        console.info('Export %s tasks into %s', taskList.length, filename);
        return true;
    } catch (e) {
        console.error('Export task-list are failed =>', e);
        return false;
    }
}