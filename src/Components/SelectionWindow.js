import { StyledSelectionBox, StyledListsWrapper, StyledSearchField, StyledApplyButton, StyledModal } from '../StyledComponents';

import { CircularProgress } from '@mui/material';

import { DragDropContext } from 'react-beautiful-dnd';

import ListBox from './ListBox';

export default function SelectionWindow({ isModalOpen, onDragEnd, availableColumns, handleSelect, selectedColumns, handleCancelSelection, handleToggleModal }) {
    return (
        <StyledModal
            open={isModalOpen}
            onClose={handleToggleModal}
        >
            {selectedColumns && availableColumns
            ? (
            <StyledSelectionBox>
                <StyledSearchField size='small' label="Search available columns..." type="search" />
                <DragDropContext onDragEnd={onDragEnd}>
                    <StyledListsWrapper>
                        <ListBox
                            droppableId={'available'}
                            columns={availableColumns}
                            handleSelect={handleSelect}
                        />

                        <ListBox
                            droppableId={'selected'}
                            columns={selectedColumns}
                            handleCancelSelection={handleCancelSelection}
                        />
                    </StyledListsWrapper>
                </DragDropContext>
                    <StyledApplyButton variant="contained" onClick={handleToggleModal}>
                        Apply
                    </StyledApplyButton>
                </StyledSelectionBox>
            )
            : <CircularProgress />
            }
        </StyledModal>
    );
};