import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DetailPage, { detailLoader } from './routes/DetailPage';
import EditPage from './routes/EditPage';
import { HelpPage } from './routes/HelpPage';
import HomePage from './routes/HomePage';
import NewTask from './routes/NewTask';
import Root from './routes/Root';
import DataProvider from './store/DataProvider';

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
      <DataProvider>
          <RouterProvider router={router}/>
      </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
