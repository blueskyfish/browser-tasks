import { produce } from 'immer';
import { loadTaskList, saveTaskList } from './DataStorage';
import { Task } from './TaskModel';

export enum DataActionKind {
    LoadTaskList = 'load',
    UpdateTaskList = 'updateTaskList',
    AddTask = 'addTask',
    UpdateTask = 'updateTask',
}

export interface DataAction<Data> {
    type: DataActionKind;
    payload: Data;
}

export interface DataState {
    taskMap: Record<string, Task>;
}

export const initialState: DataState = {
    taskMap: {},
};


export function dataReducer(state: DataState, action: DataAction<any>): DataState {
    const {type, payload} = action;
    switch (type) {
        case DataActionKind.UpdateTaskList:
            return produce(state, (baseState) => {
                return updateTaskList(baseState, payload);
            });
        default:
            return state;
    }
}

export function middleware(dispatch: any) {
    return async function(action: DataAction<any>) {
        const {type, payload} = action;
        switch (type) {
            case DataActionKind.LoadTaskList:
                dispatch(createAction(DataActionKind.UpdateTaskList, loadTaskList()));
                break;
            case DataActionKind.AddTask:
                const appendedList = appendTaskList(loadTaskList(), payload);
                saveTaskList(appendedList);
                dispatch(createAction(DataActionKind.UpdateTaskList, appendedList));
                break;
            case DataActionKind.UpdateTask:
                const updatedList = replaceTaskList(loadTaskList(), payload);
                saveTaskList(updatedList);
                dispatch(createAction(DataActionKind.UpdateTaskList, updatedList));
                break;
        }
    }
}

function updateTaskList(state: DataState, list: Task[]): DataState {
    const taskMap: Record<string, Task> = {};
    list.forEach((t: Task) => {
        taskMap[t.id] = t;
    })
    return {
        ...state,
        taskMap
    };
}

export function appendTaskList(list: Task[], newTask: Task): Task[] {
    const id = crypto.randomUUID();
    return [...list, { ...newTask, id }];
}

export function replaceTaskList(list: Task[], changedTask: Task): Task[] {
    return list.map((t: Task) => {
        if (t.id === changedTask.id) {
            return changedTask;
        }
        return t;
    });
}

export function createAction<T>(type: DataActionKind, payload: T): DataAction<T> {
    return { type, payload };
}