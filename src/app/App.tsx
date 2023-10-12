import { LinkProps, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect } from 'react';
import {
    createBrowserRouter,
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    RouterProvider
} from 'react-router-dom';
import { useAppDispatch } from '../features/hooks';
import { loadTaskList } from '../features/tasks/taskThunks';
import DetailPage, { detailLoader } from './routes/DetailPage';
import EditPage from './routes/EditPage';
import ExportPage from './routes/ExportPage';
import { HelpPage } from './routes/HelpPage';
import HomePage from './routes/HomePage';
import NewTask, { newLoader } from './routes/NewTask';
import NotFoundPage from './routes/NotFoundPage';
import RootPage from './routes/RootPage';

// region Material Theme
//
// MUI Link to Router Link => https://mui.com/material-ui/guides/routing/
const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
    const {href, ...other} = props;
    // Map href (Material UI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
});

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
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
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
                path: 'detail/:id',
                element: <DetailPage/>,
                loader: detailLoader
            },
            {
                path: 'edit/:id',
                element: <EditPage/>,
                loader: detailLoader,
            },
            {
                path: 'new',
                element: <NewTask/>,
                loader: newLoader,
            },
            {
                path: 'export',
                element: <ExportPage/>
            },
            {
                path: 'help',
                element: <HelpPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
], {basename: '/browser-tasks'});
// endregion


export default function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // @ ts-ignore
        dispatch(loadTaskList());
    }, [dispatch]);
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RouterProvider router={router}/>
            </LocalizationProvider>
        </ThemeProvider>
    );
}