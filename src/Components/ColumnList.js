import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { StyledList, StyledIconButton, StyledListItem } from '../StyledComponents';
import { ListItemText } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

export default function ColumnList({ droppableId, columns, handleSelect, handleCancelSelection }) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <StyledList dense={true} {...provided.droppableProps} ref={provided.innerRef}>
                    {columns.map((name, index) => (
                        <Draggable key={name} draggableId={name} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    {droppableId === 'available' ? (
                                        <StyledListItem onClick={() => handleSelect(name)}>
                                            <ListItemText primary={name} align="left" />
                                        </StyledListItem>
                                    ) : (
                                        <StyledListItem>
                                            <ListItemText primary={name} align="left" />
                                            <StyledIconButton
                                                aria-label="clear"
                                                onClick={() => handleCancelSelection(name)}
                                            >
                                                <CloseIcon />
                                            </StyledIconButton>
                                        </StyledListItem>
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </StyledList>
            )}
        </Droppable >
    )
}