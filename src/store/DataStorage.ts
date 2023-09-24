import { Task } from './TaskModel';

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

export function loadTaskList(): Task[] {
    const text = localStorage.getItem(buildKey('list'));
    return jsonParse<Task[]>(text, []);
}