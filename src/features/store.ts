import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
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
