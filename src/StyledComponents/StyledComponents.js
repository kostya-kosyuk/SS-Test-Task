import styled from 'styled-components';

import { TableContainer, Table, Box, TextField, List, IconButton, Modal, ListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const StyledBox = styled(Box)`
margin: auto;

height: 100vh;
max-width: 90vw;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const StyledButtonBox = styled(Box)`
width: 100%;

margin-bottom: 16px;

display: flex;
flex-direction: row;
align-items: center;
`;
export const StyledTableContainer = styled(TableContainer)`

max-height: 90vh;

@media only screen and (min-width: 768px) {
};

`;

export const StyledTable = styled(Table)`
min-width: 650px;
min-height: 400px;

th, td {
    border: 1px solid #ddd;
padding: 4px;
}
`;

export const StyledSelectionBox = styled(Box)`
padding: 16px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

paddings: 16px;

background-color: white;

position: absolute;

top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 2px solid rgba(0, 0, 0, 0.12);
border-radius: 10px;

> * {
    &:first-child {
        margin-bottom: 12px;
    }

    margin-bottom: 12px;

    &:last-child {
        border-radius: 8px;
    }
}
`;

export const StyledListBox = styled(Box)`
min-width: 128px;
padding-top: 8px;

display: flex;
flex-direction: column;
align-items: center;

border: 2px solid rgba(0, 0, 0, 0.12);
border-radius: 10px;

> * {
    &:first-child {
        margin: 0 30px;
    }
}
`;

export const StyledListsWrapper = styled(Box)`
display: flex;
flex-direction: row;

> * {
    &:first-child {
        margin-right: 24px;
    }
}
`;

export const StyledSearchField = styled(TextField)`
width: 100%;
fieldset {
border-radius: 12px;
}
`;

export const StyledList = styled(List)`
height: 300px;
width: 90%;

overflow-y: auto;
overflow-x: hidden;
`;

export const StyledIconButton = styled(IconButton)`
    padding: 4px;
    width: 24px;
    height: 24px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
    font-size: 16px;
`;

export const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledListItem = styled(ListItem)`
border-radius: 14px;
background-color: rgba(0, 0, 0, 0.05);
margin-bottom: 6px;
`;