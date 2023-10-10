import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeywordCounter, Task } from './task';
import { keywordCounter, tasksData } from './taskData';

export type TasksState = {
    taskList: Task[],
    keywords: KeywordCounter;
    selected: string;
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {taskList: tasksData, keywords: keywordCounter, selected: ''},
    reducers: {
        initTaskList: (state, action: PayloadAction<Task[]>) => {
            return {
                ...state,
                taskList: action.payload,
            }
        },
        updateTaskList: (state, action: PayloadAction<Task[]>) => {
            return {
                ...state,
                taskList: action.payload,
            }
        },
    },
});


export default taskSlice.reducer;
export const {
    updateTaskList,
    initTaskList
} = taskSlice.actions;

