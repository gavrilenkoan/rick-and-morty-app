import { Pagination, styled } from "@mui/material";

const StyledPagination = styled(Pagination)(() => ({
    '& .MuiPaginationItem-root.Mui-selected': {
        backgroundColor: 'var(--accent)',
        color: 'var(--bg)',
    },
    '&   .MuiPaginationItem-root': {
        color: 'var(--text)',
    },
}));

export default StyledPagination;