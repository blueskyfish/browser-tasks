import { createContext } from 'react';
import { DataState, initialState } from './DataReducer';
import { DataAction } from './DataAction';

export type DataContextProps = {
    getState: () => DataState;
    dispatch: (action: DataAction<any>) => void;
}

const initialContext: DataContextProps = {
    getState: () => initialState,
    dispatch: async (action) => {
        console.warn('Add real dispatch "%s"', action.type);
    }
}

const DataContext = createContext<DataContextProps>(initialContext);

export default DataContext;