import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { StyledList, StyledIconButton, StyledCloseIcon } from '../StyledComponents';
import { ListItem, ListItemText } from '@mui/material';

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
                                        <ListItem onClick={() => handleSelect(name)}>
                                            <ListItemText primary={name} align="left" />
                                        </ListItem>
                                    ) : (
                                        <ListItem>
                                            <ListItemText primary={name} align="left" />
                                            <StyledIconButton
                                                aria-label="clear"
                                                onClick={() => handleCancelSelection(name)}
                                            >
                                                <StyledCloseIcon />
                                            </StyledIconButton>
                                        </ListItem>
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
};