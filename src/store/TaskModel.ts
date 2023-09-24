
export type TaskStatus = 'normal' | 'important' | 'highly';

export type Task = {
    id: string;
    title: string;
    content: string;
    done: boolean;
    status: TaskStatus;
    dueDate?: string;
    keywords?: string[];
}