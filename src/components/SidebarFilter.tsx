import { mdiDeleteOutline, mdiFilterOutline, mdiFilterPlusOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useContext, useState } from 'react';
import { isSmallResponse, ResponsiveSize } from '../media-query/useResponsiveSize';
import { withFilterKeyword } from '../store/DataAction';
import DataContext from '../store/DataContext';
import KeywordBubbles from './KeywordBubbles';
import './SidebarFilter.css';

export type SidebarFilterProps = {
    size: ResponsiveSize,
};

export default function SidebarFilter ({size}: SidebarFilterProps) {
    const [open, setOpen] = useState(false);
    const { getKeywordCounts, getFilter, dispatch } = useContext(DataContext)

    const handleFilter = (keyword: string): void => {
        setOpen(false);
        dispatch(withFilterKeyword(keyword));
    };

    let keyword = getFilter();
    if (!keyword || keyword === '') {
        keyword = 'All';
    }

    if (isSmallResponse(size)) {
        return (
            <div className="sidebar-filter-header">
                <IconButton sx={{ margin: '0 auto'}} onClick={() => setOpen(true)}>
                    <Icon path={mdiFilterPlusOutline} size={1}/>
                </IconButton>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Keyword &quot;{keyword}&quot;</DialogTitle>
                    <DialogContent>
                        <KeywordBubbles counts={getKeywordCounts()} onFilter={handleFilter}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleFilter('')}>Clear</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    return (
        <>
            <List>
                <ListItem
                    secondaryAction={
                        <IconButton onClick={() => handleFilter('')}>
                            <Icon path={mdiDeleteOutline} size={1}/>
                        </IconButton>
                    }
                >
                    <ListItemText>Keyword &quot;{keyword}&quot;</ListItemText>
                </ListItem>
            </List>
            <KeywordBubbles counts={getKeywordCounts()} onFilter={handleFilter}/>
        </>
    );
}