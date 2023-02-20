import { combineReducers } from 'redux';
import { getColumns } from '../utils/dataFunctions';

const dataReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_DATA':
                return action.payload;
        default:
            return state;
    }
};

const columnsReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_COLUMNS':
            return getColumns(action.payload);
        default:
            return state;
    }
};

const availableColumnsReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_COLUMNS':
            return action.payload;
        default:
            return state;
    }
};

const selectedColumnsReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_SELECTED_COLUMNS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    data: dataReducer,
    columns: columnsReducer,
    availableColumns: availableColumnsReducer,
    selectedColumns: selectedColumnsReducer,
});