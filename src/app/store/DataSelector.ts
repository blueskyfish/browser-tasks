import { Task } from './TaskModel';

export type KeywordCount = Record<string, number>;

export function getKeywordCounts(taskList: Task[]): KeywordCount {
    const counter: KeywordCount = {};

    taskList.forEach(({keywords}: Task) => {
        keywords.forEach((key: string) => {
            if (!counter[key]) {
                counter[key] = 0;
            }
            counter[key]++;
        });
    });

    return counter;
}