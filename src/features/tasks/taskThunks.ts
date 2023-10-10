import { AppThunk } from '../store';
import { Task } from './task';
import { initTaskList, updateTaskList } from './taskSlice';
import { loadTaskListFromLocalStorage, saveTaskListInLocalStorage } from './taskUtils';

/**
 * Action to load the task list.
 */
export const loadTaskList = (): AppThunk => {
    return (dispatch) => {
        const taskList = loadTaskListFromLocalStorage();
        dispatch(initTaskList(taskList));
    };
};

export const saveTaskItem = (item: Task): AppThunk => {
    return (dispatch, getState) => {
        const { tasks: {taskList}} = getState();

        const savedTaskList = taskList.map((task: Task) => {
            if (task.id === item.id) {
                return item;
            }
            return task;
        });

        saveTaskListInLocalStorage(savedTaskList);
        dispatch(updateTaskList(savedTaskList));
    };
};

export const createTaskItem = (item: Task): AppThunk => {
    return (dispatch, getState) => {
        const { tasks: { taskList }} = getState();

        item.id = crypto.randomUUID();

        const savedTaskList = [...taskList, item];
        saveTaskListInLocalStorage(savedTaskList);
        dispatch(updateTaskList(savedTaskList));
    }
};
