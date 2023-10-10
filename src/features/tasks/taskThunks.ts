import { Action, ThunkAction } from '@reduxjs/toolkit';
import { initTaskList, TasksState } from './taskSlice';
import { loadTaskList } from './taskUtils';

export function loading(): ThunkAction<void, TasksState, null, Action<string>> {
    return (dispatch) => {
        const taskList = loadTaskList();
        dispatch(initTaskList(taskList));
    };
}