
export type TaskStatus = 'normal' | 'important' | 'highly';

export type Task = {
    id: string;
    title: string;
    content: string;
    done: boolean;
    status: TaskStatus;
    dueDate: string | null;
    keywords: string[];
}

export const emptyTask = (): Task => {
    return {
        id: '',
        title: '',
        content: '',
        status: 'normal',
        done: false,
        dueDate: null,
        keywords: []
    };
};