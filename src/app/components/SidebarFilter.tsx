import { mdiDeleteOutline, mdiFilterPlusOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { selectTasks } from '../../features/tasks/taskSelectors';
import { updateSelected } from '../../features/tasks/taskSlice';
import { isSmallResponse, ResponsiveSize } from '../media-query/useResponsiveSize';
import KeywordBubbles from './KeywordBubbles';
import './SidebarFilter.css';

export type SidebarFilterProps = {
    size: ResponsiveSize,
};

export default function SidebarFilter({size}: SidebarFilterProps) {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const {keywords, selected} = useAppSelector(selectTasks);

    const handleFilter = (keyword: string): void => {
        setOpen(false);
        dispatch(updateSelected(keyword));
    };

    let keyword = selected;
    if (!keyword || keyword === '') {
        keyword = 'All';
    }

    const hasFilter = keyword !== 'All';

    if (isSmallResponse(size)) {
        return (
            <div className="sidebar-filter-header">
                <IconButton sx={{margin: '0 auto'}} onClick={() => setOpen(true)}>
                    <Icon path={mdiFilterPlusOutline} size={1}/>
                </IconButton>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Keyword &quot;{keyword}&quot;</DialogTitle>
                    <DialogContent>
                        <KeywordBubbles counter={keywords} selected={keyword} onFilter={handleFilter}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleFilter('')}>Clear</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    return (
        <>
            <Typography variant="h6" mt={2} pl={2}>Keywords</Typography>
            <MenuList>
                <MenuItem key={'delete-filter'} onClick={() => handleFilter('')} divider={true} disabled={!hasFilter}>
                    <ListItemIcon>
                        <Icon path={mdiDeleteOutline} size={1}/>
                    </ListItemIcon>
                    <ListItemText>Remove Filter</ListItemText>
                </MenuItem>
            </MenuList>
            <KeywordBubbles counter={keywords} selected={keyword} onFilter={handleFilter}/>
        </>
    );
}