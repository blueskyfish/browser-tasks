import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Task } from './task';

export const selectTasks = (state: RootState) => state.tasks;
export const selectTaskList = (state: RootState) => state.tasks.taskList;
export const selectTaskSelected = (state: RootState) => state.tasks.selected;
export const selectFilteredTaskList = createSelector(
    [selectTaskList, selectTaskSelected],
    (taskList, selected) => {
        if (!selected || selected === '') {
            return taskList;
        }
        return taskList.filter((task: Task) => {
            return task.keywords.includes(selected);
        });
    }
);
export const selectTaskById = (id: string): (state: RootState) => Task | undefined => {
    return (state: RootState) => {
        const {taskList, selected} = selectTasks(state);
        const task = taskList.find((t: Task) => t.id === id);
        if (task) {
            if (!selected || selected === '') {
                return task;
            }
            if (task.keywords.includes(selected)) {
                return task;
            }
        }
        return undefined;
    };
};