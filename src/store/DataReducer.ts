import { produce } from 'immer';
import { DataAction, DataActionKind, withInitTaskList, withUpdateTaskList } from './DataAction';
import { loadTaskList, saveTaskList } from './DataStorage';
import { Task } from './TaskModel';

export interface DataState {
    taskMap: Record<string, Task>;
}

export const initialState: DataState = {
    taskMap: {},
};

const updateStateTaskList = (state: DataState, list: Task[]): DataState => {
    const taskMap: Record<string, Task> = {};
    list.forEach((t: Task) => {
        taskMap[t.id] = t;
    })
    return {
        ...state,
        taskMap
    };
}

export function dataReducer(state: DataState, action: DataAction<any>): DataState {
    const {type, payload} = action;
    switch (type) {
        case DataActionKind.InitTaskList:
            return produce(state, (baseState) => updateStateTaskList(baseState, payload));
        case DataActionKind.UpdateTaskList:
            // save the changed task list
            saveTaskList(payload);
            return produce(state, (baseState) => updateStateTaskList(baseState, payload));
        default:
            return state;
    }
}

/**
 * Middleware is a wrapper around the dispatch method
 * @param dispatch
 */
export function middleware(dispatch: any) {
    return async function(action: DataAction<any>) {
        const {type, payload} = action;
        switch (type) {
            case DataActionKind.LoadTaskList:
                dispatch(withInitTaskList(loadTaskList()));
                break;
            case DataActionKind.AddTask:
                const appendedList = appendTaskList(loadTaskList(), payload);
                dispatch(withUpdateTaskList(appendedList));
                break;
            case DataActionKind.UpdateTask:
                const updatedList = replaceTaskList(loadTaskList(), payload);
                dispatch(withUpdateTaskList(updatedList));
                break;
        }
    }
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