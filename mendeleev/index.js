const elements = {
    'H': {
        name: 'Hydrogenium',
        number: 1,
        weight: 1.008,
    },
    'He': {
        name: 'Helium',
        number: 2,
        weight: 4.003,
    },
    'Li': {
        name: 'Lithium',
        number: 3,
        weight: 6.491
    },
    'Be': {
        name: 'Beryllium',
        number: 4,
        weight: 9.012
    },
    'B': {
        name: 'Borum',
        number: 5,
        weight: 10.811
    },
    'C': {
        name: 'Carbboneum',
        number: 6,
        weight: 12.011
    },
    'N': {
        name: 'Nitrogenium',
        number: 7,
        weight: 14.007
    },
    'O': {
        name: 'Oxygenium',
        number: 8,
        weight: 15.999
    },
    'F': {
        name: 'Fluorum',
        number: 9,
        weight: 18.998
    },
    'Ne': {
        name: 'Neon',
        number: 10,
        weight: 20.179
    }
};

module.exports = (element) => {
    if (element) {
        return elements[element];
    }
    else {
        throw new Error('element is undefined');
    }
};