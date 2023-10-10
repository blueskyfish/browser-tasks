import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeywordCounter, Task } from './task';
import { initTaskListReduce, updateSelectedReduce, updateTaskListReduce } from './taskReduces';

export type TasksState = {
    taskList: Task[],
    keywords: KeywordCounter;
    selected: string;
};

const initialState: TasksState = {
    taskList: [],
    keywords: {},
    selected: '',
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        initTaskList: (state, action: PayloadAction<Task[]>) => {
            return initTaskListReduce(state, action.payload);
        },
        updateTaskList: (state, action: PayloadAction<Task[]>) => {
            return updateTaskListReduce(state, action.payload);
        },
        updateSelected: (state, action: PayloadAction<string>) => {
            return updateSelectedReduce(state, action.payload);
        }
    },
});


export default taskSlice.reducer;

export const {
    updateTaskList,
    initTaskList,
    updateSelected,
} = taskSlice.actions;

