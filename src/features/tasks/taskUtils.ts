import { Task } from './task';

/**
 * Create a empty task
 */
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


const buildKey = (key: string): string => `blueskyfish.browserTask.${key}`;


const jsonParse = <T>(text: string | null | undefined, defValue: T): T => {
    if (!text) {
        return defValue;
    }
    try {
        return JSON.parse(text) as T;
    } catch (e: any) {
        // TODO Add error notifier
        console.error('Error occurred on json parsing => %s', e.message);
        return defValue;
    }
}

export function loadTaskListFromLocalStorage(): Task[] {
    const text = localStorage.getItem(buildKey('list'));
    return jsonParse<Task[]>(text, []);
}

export function saveTaskListInLocalStorage(list: Task[]): void {
    const text = JSON.stringify(list);
    localStorage.setItem(buildKey('list'), text);
}