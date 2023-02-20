export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
});

export const setColumns = (columns) => ({
    type: 'SET_COLUMNS',
    payload: columns,
});

export const setAvailableColumns = (columns) => ({
    type: 'SET_AVAILABLE_COLUMNS',
    payload: columns,
});

export const setSelectedColumns = (columns) => ({
    type: 'SET_SELECTED_COLUMNS',
    payload: columns,
});