import { KeywordCounter, Task } from './task';

export const tasksData: Task[] = [
    {
        id: 'abc',
        title: 'Tea',
        content: 'Buy tea',
        done: false,
        status: 'normal',
        dueDate: null,
        keywords: ['Private', 'Buy']
    }
];

export const keywordCounter: KeywordCounter = {
    'Private': 1,
    'Buy': 1
};