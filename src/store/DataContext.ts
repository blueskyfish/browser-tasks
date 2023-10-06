import { createContext } from 'react';
import { DataState, initialState } from './DataReducer';
import { DataAction } from './DataAction';
import { KeywordCount } from './DataSelector';
import { Task } from './TaskModel';

export type DataContextProps = {
    getTaskList: () => Task[];
    getKeywordCounts: () => KeywordCount;
    getFilter: () => string;
    dispatch: (action: DataAction<any>) => void;
}

const initialContext: DataContextProps = {
    getTaskList: () => {
        console.warn('Add real task list');
        return []
    },
    getKeywordCounts: (): KeywordCount => {
        console.warn('Add real keyword list');
        return {};
    },
    getFilter: () => {
        console.warn('Add real filter');
        return '';
    },
    dispatch: async (action) => {
        console.warn('Add real dispatch "%s"', action.type);
    }
}

const DataContext = createContext<DataContextProps>(initialContext);

export default DataContext;