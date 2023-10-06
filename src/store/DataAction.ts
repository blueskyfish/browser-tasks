import { Task } from './TaskModel';

export enum DataActionKind {
    /**
     * First action to load the task list from localStorage
     */
    LoadTaskList = 'loadTaskList',

    /**
     * Initialize the state
     */
    InitTaskList = 'initTaskList',

    /**
     * Update the state and save the change into the localStorage
     */
    UpdateTaskList = 'updateTaskList',

    /**
     * Add a new task
     */
    AddTask = 'addTask',

    /**
     * Update an existing task
     */
    UpdateTask = 'updateTask',

    FilterKeyword = 'filterKeyword'
}

/**
 * Template for an action
 */
export interface DataAction<Data> {
    type: DataActionKind;
    payload: Data;
}


export const withLoadTaskList = (): DataAction<null> => {
    return createAction(DataActionKind.LoadTaskList, null);
}

export const withUpdateTaskList = (taskList: Task[]): DataAction<Task[]> => {
    return createAction(DataActionKind.UpdateTaskList, taskList);
};

export const withInitTaskList = (taskList: Task[]): DataAction<Task[]> => {
    return createAction(DataActionKind.InitTaskList, taskList);
};

export const withAddTask = (task: Task): DataAction<Task> => {
    return createAction(DataActionKind.AddTask, task);
};

export const withUpdateTask = (task: Task): DataAction<Task> => {
    return createAction(DataActionKind.UpdateTask, task);
};

export const withFilterKeyword = (keyword: string): DataAction<string> => {
    return createAction(DataActionKind.FilterKeyword, keyword);
}

/**
 * Create a {@link DataAction}
 * @param type the action type {@link DataActionKind}
 * @param payload the payload
 */
function createAction<T>(type: DataActionKind, payload: T): DataAction<T> {
    return { type, payload };
}
