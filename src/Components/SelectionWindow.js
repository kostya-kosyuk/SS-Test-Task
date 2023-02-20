import { StyledSelectionBox, StyledListsWrapper, StyledSearchField, StyledModal } from '../StyledComponents';
import { Button } from '@mui/material'

import { DragDropContext } from 'react-beautiful-dnd';

import ListBox from './ListBox';

import { useState, useMemo } from 'react';
import { getSelectedColumns, getAvailableColumns, setAvailableColumns, setSelectedColumns } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectionWindow({ isModalOpen, handleToggleModal }) {
    const dispatch = useDispatch();
    const selectedColumns = useSelector(getSelectedColumns);
    const availableColumns = useSelector(getAvailableColumns);

    const [tempAvailable, setTempAvailable] = useState([...availableColumns]);
    const [query, setQuery] = useState('');
    const visibleColumns = useMemo(() => {
        return tempAvailable.filter((name) => name.toLowerCase().includes(query));
    }, [query, tempAvailable]);

    const [tempSelected, setTempSelected] = useState([...selectedColumns]);

    const handleCancelSelection = (name) => {
        setTempSelected(prev => [...prev.filter((name1) => name1 !== name)]);
        setTempAvailable(prev => [...prev, name]);
    };

    const handleSelect = (name) => {
        setTempAvailable(prev => [...prev.filter((name1) => name1 !== name)]);
        setTempSelected(prev => [...prev, name]);
    };

    const handleQueryChange = (query) => {
        setQuery(query.toLowerCase());
    };

    const handleApplySelection = (tempAvailable, tempSelected) => {
        dispatch(setAvailableColumns(tempAvailable));
        dispatch(setSelectedColumns(tempSelected));
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId !== destination.droppableId) {
            const sourceItems = [...(source.droppableId === "available" ? tempAvailable : tempSelected)];
            const [removedItem] = sourceItems.splice(source.index, 1);
            const destinationItems = [...(destination.droppableId === "available" ? tempAvailable : tempSelected)];
            destinationItems.splice(destination.index, 0, removedItem);

            setTempAvailable(destination.droppableId === "available" ? destinationItems : sourceItems);
            setTempSelected(destination.droppableId === "selected" ? destinationItems : sourceItems);
        }
    };

    return (availableColumns && (
        <StyledModal
            open={isModalOpen}
            onClose={handleToggleModal}
        >
            <StyledSelectionBox>
                <StyledSearchField size='small' label="Search available columns..." type="text"
                    autoComplete='off'
                    onChange={(event) => handleQueryChange(event.target.value)}
                />
                <DragDropContext onDragEnd={onDragEnd}>
                    <StyledListsWrapper>
                        <ListBox
                            droppableId={'available'}
                            columns={visibleColumns}
                            handleSelect={handleSelect}
                        />

                        <ListBox
                            droppableId={'selected'}
                            columns={tempSelected}
                            handleCancelSelection={handleCancelSelection}
                        />
                    </StyledListsWrapper>
                </DragDropContext>
                <Button variant="contained"
                    onClick={() => {
                        handleToggleModal();
                        handleApplySelection(tempAvailable, tempSelected);
                    }}>
                    Apply
                </Button>
            </StyledSelectionBox>
        </StyledModal>
    ))
}