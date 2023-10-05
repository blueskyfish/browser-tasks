import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import DetailPage, { detailLoader } from './routes/DetailPage';
import EditPage from './routes/EditPage';
import { HelpPage } from './routes/HelpPage';
import HomePage from './routes/HomePage';
import NewTask, { newLoader } from './routes/NewTask';
import RootPage from './routes/RootPage';
import DataProvider from './store/DataProvider';

// region Material Theme
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#aa00ff',
        },
        error: {
            main: '#d50000',
        },
        warning: {
            main: '#e57373',
        },
    },
});
// endregion

// region Browser Routing
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage/>,
        children: [
            {
                element: <HomePage/>,
                index: true,
            },
            {
                path: 'task/:id',
                element: <DetailPage/>,
                loader: detailLoader
            },
            {
                path: 'task/:id/edit',
                element: <EditPage/>,
                loader: detailLoader,
            },
            {
                path: 'new',
                element: <NewTask/>,
                loader: newLoader,
            },
            {
                path: 'help',
                element: <HelpPage/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace={true}/>
    }
]);
// endregion


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DataProvider>
                    <RouterProvider router={router}/>
                </DataProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}