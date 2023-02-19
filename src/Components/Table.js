import { Paper, TableRow, TableHead, TableCell, TableBody } from '@mui/material';

import {  StyledButton, StyledButtonBox,  StyledTable, StyledTableContainer } from '../StyledComponents';

export default function Table({ handleToggleModal, selectedColumns, rows }) {
    return (
        <>
            <StyledButtonBox>
                <StyledButton variant="contained" size='small' onClick={() => handleToggleModal()}>Select Columns</StyledButton>
            </StyledButtonBox>
            <StyledTableContainer component={Paper}>
                <StyledTable aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {selectedColumns.map((name) => <TableCell align="center" key={name}>{name}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {Object.keys(row).map(keyName => <TableCell align='center' key={keyName}>{row[keyName]}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
        </>
    );
};