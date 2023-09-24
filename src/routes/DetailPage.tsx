import { mdiTextBoxOutline } from '@mdi/js';
import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import DataDetail from '../components/DataDetail';
import Header from '../components/Header';
import DataContext from '../store/DataContext';

export type DetailLoaderResponse = {
    id: string;
}

export function detailLoader({params}: LoaderFunctionArgs): DetailLoaderResponse {
    return { id: params.id ?? '' };
}

export default function DetailPage() {
    const { state, dispatch} = useContext(DataContext);
    const { taskMap } = state;
    const { id } = useLoaderData() as any;
    const task = taskMap[id] ?? null;

    return (
        <>
            <Header title="Detail" icon={mdiTextBoxOutline}/>
            { task !== null && <DataDetail task={task} /> }
        </>
    )
}