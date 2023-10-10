import { Task } from './task';
import { TasksState } from './taskSlice';

export function updateTaskListReduce(state: TasksState, taskList: Task[]): TasksState {
    state.taskList = taskList;
    return state;
}

export function initTaskListReduce(state: TasksState, taskList: Task[]): TasksState {
    return updateTaskListReduce(state, taskList);
}
