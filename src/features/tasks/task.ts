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

export type InputTask = Omit<Task, 'id'>;

/**
 * The keyword as key and the count as value
 */
export type KeywordCounter = Record<string, number>;