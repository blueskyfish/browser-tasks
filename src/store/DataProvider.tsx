import React, { JSX, useEffect, useMemo, useReducer } from 'react';
import DataContext from './DataContext';
import { createAction, DataActionKind, dataReducer, initialState, middleware } from './DataReducer';

export type DataProviderProps = {
    children: JSX.Element | React.ReactElement;
}


export default function DataProvider({children}: DataProviderProps) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);

    useEffect(() => {
        middlewareDispatch(createAction(DataActionKind.LoadTaskList, null)).catch((reason) => console.error(reason));
    }, [middlewareDispatch]);


    return (
        <DataContext.Provider value={{ state, dispatch: middlewareDispatch }}>
            {children}
        </DataContext.Provider>
    );
}