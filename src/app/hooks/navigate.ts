import { useNavigate } from 'react-router-dom';

export const useNavigateEdit = () => {
    const navigation = useNavigate();
    return (id: string) => {
        navigation(`/edit/${id}`);
    };
};

export const useNavigateDetail = () => {
    const navigate = useNavigate();
    return (id: string) => {
        navigate(`detail/${id}`);
    };
};

export const useNavigateHome = () => {
    const navigate = useNavigate();
    return () => {
        navigate('/');
    };
};

export const useNavigateFilter = () => {
    const navigate = useNavigate();
    return (keyword: string) => {
        navigate(`/${encodeURI(keyword)}`);
    };
};

export const useNavigateNew = () => {
    const navigate = useNavigate();
    return () => {
        navigate('/new');
    };
};

export const useNavigateHelp = () => {
    const navigate = useNavigate();
    return () => {
        navigate('/help');
    };
};

export const useNavigateExport = () => {
    const navigate = useNavigate();
    return () => {
        navigate('/export');
    };
};