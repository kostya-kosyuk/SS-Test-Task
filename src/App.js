import { useCallback, useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getData, getColumns, getAvailableColumns, setData, setColumns, setAvailableColumns, setSelectedColumns } from './redux';
import { getData as getDataFromServer } from './utils/api'


import { MemoizedTable } from './Components/Table';
import SelectionWindowLazy from './LazyComponents/SelectionWindowLazy';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const columns = useSelector(getColumns);
  const availableColumns = useSelector(getAvailableColumns);

  const [isModalOpen, setModalToggle] = useState(false);

  useEffect(() => {
    if (!data) {
      getDataFromServer().then((data) => {
        dispatch(setData(data));
      });
    }
  }, []);

  useEffect(() => {
    if (!columns && data) {
      dispatch(setColumns(data));
    }
  }, [data]);

  useEffect(() => {
    if (!availableColumns && columns) {
      const allColumns = [...columns];
      const selected = allColumns.splice(0, 5);

      dispatch(setSelectedColumns(selected));
      dispatch(setAvailableColumns(allColumns));
    }
  }, [columns]);

  const handleToggleModal = useCallback(() => setModalToggle((prev) => !prev), []);

  return (
    <div className="App">
      <MemoizedTable handleToggleModal={handleToggleModal} />
      {availableColumns && (
        <SelectionWindowLazy
          isModalOpen={isModalOpen}
          handleToggleModal={handleToggleModal}
        />
      )}
    </div>
  );
}

export default App;