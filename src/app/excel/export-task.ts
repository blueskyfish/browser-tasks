import { Task } from '../../features/tasks/task';

export interface ExportTask extends Omit<Task, 'id' | 'keywords' | 'done'> {
    keywords: string;
    done: string;
}