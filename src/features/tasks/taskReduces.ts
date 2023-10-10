import { KeywordCounter, Task } from './task';
import { TasksState } from './taskSlice';

const extractKeywordCounter = (list: Task[]): KeywordCounter => {
    const counter: KeywordCounter = {};
    list.filter((task: Task) => {
        task.keywords.forEach((keyword: string) => {
            if (!counter[keyword]) {
                counter[keyword] = 0;
            }
            counter[keyword]++;
        });
    });
    return counter;
}

export function updateTaskListReduce(state: TasksState, taskList: Task[]): TasksState {
    state.taskList = taskList;
    state.keywords = extractKeywordCounter(taskList);
    return state;
}

export function initTaskListReduce(state: TasksState, taskList: Task[]): TasksState {
    return updateTaskListReduce(state, taskList);
}

export const updateSelectedReduce = (state: TasksState, keyword: string): TasksState => {
    state.selected = keyword;
    return state;
}
