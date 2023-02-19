export function getColumns(data) {
    return Object.keys(data);
}

export function getDataByNames(names, data) {
    const result = {};

    for (const name of names) {
        if (data.hasOwnProperty(name)) {
            result[name] = data[name];
        }
    }

    return result;
}

export function getRows(data) {
    const result = [];
    const columnsCount = Object.keys(data).length;
    const itemsCount = Object.values(data)[0]?.length;

    for (let i = 0; i < itemsCount; i++) {
        const row = {};

        for (let j = 0; j < columnsCount; j++) {
            const keyName = Object.keys(data)[j];
            const value = data[keyName][i];

            row[keyName] = value;
        }

        result.push(row);
    }

    return result;
}