import React, { JSX, useCallback, useEffect, useMemo, useReducer } from 'react';
import { DataAction, withLoadTaskList } from './DataAction';
import DataContext from './DataContext';
import { dataReducer, initialState, middleware } from './DataReducer';

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

    useEffect(() => {
        middlewareDispatch(withLoadTaskList()).catch((reason) => console.error(reason));
    }, [middlewareDispatch]);


    return (
        <DataContext.Provider value={{ getState: () => state, dispatch: dispatcher }}>
            {children}
        </DataContext.Provider>
    );
}