const generate = require('../script');
const saveSettings = require('../script');
// const init = require('../script');

// jest.mock('../utils', () => {
//     const originalModule = jest.requireActual('../utils');
//
//     //Mock the default export and named export 'foo'
//     return {
//         __esModule: true,
//         ...originalModule,
//         // alertCall: jest.fn(),
//         // attemptsPlus: jest.fn(),
//         setHTMLValue: jest.fn(() => true),
//         inputValueSetter: jest.fn(() => true),
//         getInputValue: jest.fn(() => 'test')
//     };
// });

jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');
    return {
        __esModule: true,
        ...originalModule,
        inputValueSetter: jest.fn(() => true),
        setHTMLValue: jest.fn(() => true),
        getInputValue: jest.fn(() => true),
        attemptsMinus: jest.fn(() => true),
        addListener: jest.fn(() => true),
    };
});

describe('tests for generate function', () => {
    test('defined', ()=> {
        expect(true).toBe(true);
    })
    test('myNum < state.result', () => {
        expect(generate({yourMinNumber: 1, yourMaxNumber: 200, inputAttempt: 15, result: 111, myNum: 100}))
            .toEqual('Теплее...ваше число меньше загаданного. Осталось ${state.inputAttempt} попытки');
    })
    test('myNum > state.result', () => {
        expect(generate({yourMinNumber: 1, yourMaxNumber: 200, inputAttempt: 15, result: 111, myNum: 189}))
            .toEqual('Холодно...ваше число больше загаданного. Осталось ${state.inputAttempt} попытки!');
    })
    test('myNum === state.result', () => {
        expect(generate({yourMinNumber: 1, yourMaxNumber: 200, inputAttempt: 15, result: 111, myNum: 111}))
            .toEqual('Поздравляю! Вы угадали число за ${state.inputAttempt} попыток!');
    })
    // test('state.inputAttempt === 0)', () => {
    //     expect(generate({yourMinNumber: 1, yourMaxNumber: 200, inputAttempt: 15, result: 111, myNum: 111}))
    //         .toEqual('Поздравляю! Вы угадали число за ${state.inputAttempt} попыток!');
    // })
})

describe('saveSettings', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('NaN', () => {
        expect(saveSettings({yourMinNumber: NaN, yourMaxNumber: 200, inputAttempt: 15}))
            .toEqual('Пожалуйста, введите числа');
    })

    test('check guess', () => {
        expect(saveSettings({yourMinNumber: 1, yourMaxNumber: 2500, inputAttempt: 15}))
            .toEqual('Ваше число больше заданного диапозона, введите число меньше 200 и больше нуля!');
    })

    test('counterNumber: 2, guessCount: 2', () => {
        expect(saveSettings({yourMinNumber: -1, yourMaxNumber: 200, inputAttempt: 15}))
            .toEqual('Введите положительное число! Оно не должно быть больше 200');
    })

    test('number out of range', () => {
        expect(saveSettings({yourMinNumber: 1, yourMaxNumber: 200, counterNumber: 90}))
            .toEqual('Вы можете ввести от 1 до 15 попыток');
    })

    test('number out of range', () => {
        expect(saveSettings({yourMinNumber: 1, yourMaxNumber: 200, counterNumber: 0}))
            .toEqual('Вы можете ввести от 1 до 15 попыток');
    })
})