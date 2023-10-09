import React, { JSX, useCallback, useEffect, useMemo, useReducer } from 'react';
import { DataAction, withLoadTaskList } from './DataAction';
import DataContext from './DataContext';
import { dataReducer, initialState, middleware } from './DataReducer';
import { getKeywordCounts } from './DataSelector';
import { Task } from './TaskModel';

export type DataProviderProps = {
    children: JSX.Element | React.ReactElement;
}

export default function DataProvider({children}: DataProviderProps) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);
    const dispatcher = useCallback((action: DataAction<any>) => {
        middlewareDispatch(action)
            .catch((reason) => {
                console.error(reason);
            });
    }, [middlewareDispatch]);

    const getTaskList = useCallback(() => {
        if (!state.filter || state.filter === '') {
            return [...state.tasks]
        } else if (state.filter !== '') {
            return state.tasks.filter((t: Task) => t.keywords.includes(state.filter));
        }
        return [];
    }, [state]);

    const getKeywordList = useCallback(() => {
        return getKeywordCounts(state.tasks);
    }, [state]);
    const getFilter = useCallback(() => {
        return state.filter;
    }, [state]);

    useEffect(() => {
        middlewareDispatch(withLoadTaskList()).catch((reason) => console.error(reason));
    }, [middlewareDispatch]);


    return (
        <DataContext.Provider value={{ getTaskList, getKeywordCounts: getKeywordList, getFilter, dispatch: dispatcher }}>
            {children}
        </DataContext.Provider>
    );
}