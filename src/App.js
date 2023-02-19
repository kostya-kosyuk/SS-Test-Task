import { useEffect, useState, useMemo} from 'react';

import { CircularProgress } from '@mui/material';
import { StyledBox } from './StyledComponents';

import getData from './utils/api';
import { getColumns, getDataByNames, getRows } from './utils/dataFunctions';


import Table from './Components/Table';
import SelectionWindow from './Components/SelectionWindow';

function App() {
  const [data, setData] = useState(null);
  const [isModalOpen, setModalToggle] = useState(false);

  const columns = useMemo(() => {
    if (data) {
      return getColumns(data);
    }
  }, [data]);

  //modal
  const [availableColumns, setAvailableColumns] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState(null);

  //table
  const rows = useMemo(() => {
    if (selectedColumns) {
      return getRows(getDataByNames(selectedColumns, data));
    }
  }, [selectedColumns]);

  //data
  useEffect(() => {
    if (!data) {
      getData().then((data) => {
        setData(data);
      });
    }
  }, []);

  //selected
  useEffect(() => {
    if (!availableColumns && columns) {
      const allColumns = [...columns];

      setSelectedColumns(allColumns.splice(0, 5));
      setAvailableColumns(allColumns);
    }
  }, [columns]);


  const handleToggleModal = () => setModalToggle((prev) => !prev);

  const handleCancelSelection = (name) => {
    setSelectedColumns(prev => [...prev.filter((name1) => name1 !== name)]);
    setAvailableColumns(prev => [...prev, name]);
  };

  const handleSelect = (name) => {
    setAvailableColumns(prev => [...prev.filter((name1) => name1 !== name)]);
    setSelectedColumns(prev => [...prev, name]);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const sourceItems = [...(source.droppableId === "available" ? availableColumns : selectedColumns)];
      const [removedItem] = sourceItems.splice(source.index, 1);
      const destinationItems = [...(destination.droppableId === "available" ? availableColumns : selectedColumns)];
      destinationItems.splice(destination.index, 0, removedItem);

      setAvailableColumns(destination.droppableId === "available" ? destinationItems : sourceItems);
      setSelectedColumns(destination.droppableId === "selected" ? destinationItems : sourceItems);
    }
  };

  return (
    <div className="App">
      <StyledBox>
        {rows
          ? <Table
          handleToggleModal={handleToggleModal}
          selectedColumns={selectedColumns}
          rows={rows}
          />
        : <CircularProgress />
        }
      </StyledBox>
      <SelectionWindow
        isModalOpen={isModalOpen}
        onDragEnd={onDragEnd}
        availableColumns={availableColumns}
        handleSelect={handleSelect}
        selectedColumns={selectedColumns}
        handleCancelSelection={handleCancelSelection}
        handleToggleModal={handleToggleModal}
      />

    </div>
  );
}

export default App;