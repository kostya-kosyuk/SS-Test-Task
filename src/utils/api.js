const root = 'https://api.jsonbin.io/v3';
const masterKey = '$2b$10$F78Ttcdj7GFPQtFiiJlw.eN/V.W.MPbCiI37WsyimyGtyR0wo3rmC';
const binID = '63ee63ccc0e7653a0578e0bb';

export function getData() {
    return fetch(`${root}/b/${binID}/latest?meta=false `, {
        method: 'GET',
        headers: {
            'X-Master-Key': masterKey,
        },
    }).then(data => data.json());
}