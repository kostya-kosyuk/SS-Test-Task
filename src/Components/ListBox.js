import { Typography } from '@mui/material';
import ColumnList from './ColumnList';
import { StyledListBox } from '../StyledComponents';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ListBox({ droppableId, columns, handleSelect, handleCancelSelection }) {
    return (
        <StyledListBox>
            <Typography align='center'>
                {capitalizeFirstLetter(droppableId)} Columns
            </Typography>
            <ColumnList
                droppableId={droppableId}
                columns={columns}
                handleSelect={handleSelect}
                handleCancelSelection={handleCancelSelection}
            />
        </StyledListBox>
    );
};