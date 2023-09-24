import { createContext } from 'react';
import { DataAction, DataState, initialState } from './DataReducer';

export type DataContextProps = {
    state: DataState;
    dispatch: (action: DataAction<any>) => Promise<void>;
}

const initialContext: DataContextProps = {
    state: initialState,
    dispatch: async (action) => {
        console.warn('Add real dispatch "%s"', action.type);
    }
}

const DataContext = createContext<DataContextProps>(initialContext);

export default DataContext;