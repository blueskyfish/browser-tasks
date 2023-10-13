import dayjs from 'dayjs';

export const toFilename = (fileExtension: string): string => {
    return `browser-tasks-from-${dayjs().format('YYYY-MM-DD-HH-mm')}.${fileExtension}`;
}