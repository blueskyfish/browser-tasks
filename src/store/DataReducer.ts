import { produce } from 'immer';
import { loadTaskList } from './DataStorage';
import { Task } from './TaskModel';

export enum DataActionKind {
    LoadTaskList = 'load',
    UpdateTaskList = 'updateTaskList',
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
        const { type, payload } = action;
        switch (type) {
            case DataActionKind.LoadTaskList:
                const payload = loadTaskList();
                dispatch(createAction(DataActionKind.UpdateTaskList, payload));
                break;
        }
    }
}

function updateTaskList(state: DataState, list: Task[]): DataState {
    console.log(list);
    const taskMap: Record<string, Task> = {};
    list.forEach((t: Task) => {
        taskMap[t.id] = t;
    })
    return {
        ...state,
        taskMap
    };
}

export function createAction<T>(type: DataActionKind, payload: T): DataAction<T> {
    return { type, payload };
}