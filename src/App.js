import { useEffect, useState} from 'react';

import styled from 'styled-components';

import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CircularProgress from '@mui/material/CircularProgress';

import Button from '@mui/material/Button';

import getData from './utils/api';
import { getAvalaibleColumns, getDataByNames, getRows } from './utils/dataFunctions';

const StyledBox = styled(Box)`
margin: auto;

min-height: 100vh;
max-width: 90vw;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledButtonBox = styled(Box)`
width: 100%;

margin-bottom: 16px;

display: flex;
flex-direction: row;
align-items: center;
`;
const StyledButton = styled(Button)`
`;
const StyledTableContainer = styled(TableContainer)`

max-height: 90vh;

@media only screen and (min-width: 768px) {
};

`;
const StyledTable = styled(Table)`
min-width: 650px;
`;

function App() {
  const [data, setData] = useState(null);
  const [rows, setRows] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState(['date', 'limit', 'number', 'users']);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
      setRows(getRows(getDataByNames(selectedColumns, data)));
    });
  }, []);

  return (
    <div className="App">
      <StyledBox>
          {rows
            ? (<>
                <StyledButtonBox>
                  <StyledButton variant="contained" size='small'>Select Columns</StyledButton>
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
              </>)
          : <CircularProgress />
          }
        </StyledBox>
    </div>
  );
}

export default App;
