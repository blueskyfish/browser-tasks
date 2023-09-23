import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HelpPage } from './routes/HelpPage';
import HomePage from './routes/HomePage';
import NewTask from './routes/NewTask';
import Root from './routes/Root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                element: <HomePage/>,
                index: true,
            },
            {
                path: 'new',
                element: <NewTask/>
            },
            {
                path: 'help',
                element: <HelpPage/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={"/"} replace={true}/>
    }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
