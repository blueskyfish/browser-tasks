import { Action, applyMiddleware, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { buildThunks } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import tasksReducer from './tasks/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .prepend(

            )
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch