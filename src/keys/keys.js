const keys = [
    [
        {
            key: 'Backquote',
            rus: {
                char: 'ё',
                shiftChar: 'Ё',
            },
            eng: {
                char: '`',
                shiftChar: '~',
            },
        },
        {
            key: 'Digit1',
            rus: {
                char: '1',
                shiftChar: '!',
            },
            eng: {
                char: '1',
                shiftChar: '!',
            },
        },
        {
            key: 'Digit2',
            rus: {
                char: '2',
                shiftChar: '"',
            },
            eng: {
                char: '2',
                shiftChar: '@',
            },
        },
        {
            key: 'Digit3',
            rus: {
                char: '3',
                shiftChar: '№',
            },
            eng: {
                char: '3',
            },
        },
        {
            key: 'Digit4',
            rus: {
                char: '4',
                shiftChar: ';',
            },
            eng: {
                char: '4',
            },
        },
        {
            key: 'Digit5',
            rus: {
                char: '5',
                shiftChar: '%',
            },
            eng: {
                char: '5',
            },
        },
        {
            key: 'Digit6',
            rus: {
                char: '6',
                shiftChar: ':',
            },
            eng: {
                char: '6',
            },
        },
        {
            key: 'Digit7',
            rus: {
                char: '7',
                shiftChar: '?',
            },
            eng: {
                char: '7',
            },
        },
        {
            key: 'Digit8',
            rus: {
                char: '8',
                shiftChar: '*',
            },
            eng: {
                char: '8',
            },
        },
        {
            key: 'Digit9',
            rus: {
                char: '9',
                shiftChar: '(',
            },
            eng: {
                char: '9',
            },
        },
        {
            key: 'Digit0',
            rus: {
                char: '0',
                shiftChar: ')',
            },
            eng: {
                char: '0',
            },
        },
        {
            key: 'Minus',
            rus: {
                char: '-',
                shiftChar: '_',
            },
            eng: {
                char: '-',
            },
        },
        {
            key: 'Equal',
            rus: {
                char: '=',
                shiftChar: '+',
            },
            eng: {
                char: '=',
            },
        },
        {
            key: 'Backspace',
            classes: ['special', 'key--wide', 'no-text'],
            special: true,
            specialFunc: (context) => { context.removeKey(); },
            rus: {
                char: '←',
            },
            eng: {
                char: '←',
            },
        },
    ],
    [
        {
            key: 'Tab',
            classes: ['special', 'key--wide'],
            value: 'Tab',
            rus: {
                char: '    ',
            },
            eng: {
                char: '    ',
            },
        },
        {
            key: 'KeyQ',
            rus: {
                char: 'й',
                shiftChar: 'Й',
            },
        },
        {
            key: 'KeyW',
            rus: {
                char: 'ц',
                shiftChar: 'Ц',
            },
        },
        {
            key: 'KeyE',
            rus: {
                char: 'у',
                shiftChar: 'У',
            },
        },
        {
            key: 'KeyR',
            rus: {
                char: 'к',
                shiftChar: 'К',
            },
        },
        {
            key: 'KeyT',
            rus: {
                char: 'е',
                shiftChar: 'Е',
            },
        },
        {
            key: 'KeyY',
            rus: {
                char: 'н',
                shiftChar: 'Н',
            },
        },
        {
            key: 'KeyU',
            rus: {
                char: 'г',
                shiftChar: 'Г',
            },
        },
        {
            key: 'KeyI',
            rus: {
                char: 'ш',
                shiftChar: 'Ш',
            },
        },
        {
            key: 'KeyO',
            rus: {
                char: 'щ',
                shiftChar: 'Щ',
            },
        },
        {
            key: 'KeyP',
            rus: {
                char: 'з',
                shiftChar: 'З',
            },
        },
        {
            key: 'BracketLeft',
            rus: {
                char: 'х',
                shiftChar: 'Х',
            },
        },
        {
            key: 'BracketRight',
            rus: {
                char: 'ъ',
                shiftChar: 'Ъ',
            },
        },
        {
            key: 'Backslash',
            classes: ['special', 'key--wide'],
            rus: {
                char: '\\',
            },
        },
    ],
    [
        {
            key: 'CapsLock',
            classes: ['special', 'key--wide'],
            value: 'CapsLk',
            rus: {
                char: '',
            },
        },
        {
            key: 'KeyA',
            rus: {
                char: 'ф',
                shiftChar: 'Ф',
            },
        },
        {
            key: 'KeyS',
            rus: {
                char: 'ы',
                shiftChar: 'Ы',
            },
        },
        {
            key: 'KeyD',
            rus: {
                char: 'в',
                shiftChar: 'В',
            },
        },
        {
            key: 'KeyF',
            rus: {
                char: 'а',
                shiftChar: 'А',
            },
        },
        {
            key: 'KeyG',
            rus: {
                char: 'п',
                shiftChar: 'П',
            },
        },
        {
            key: 'KeyH',
            rus: {
                char: 'р',
                shiftChar: 'Р',
            },
        },
        {
            key: 'KeyJ',
            rus: {
                char: 'о',
                shiftChar: 'О',
            },
        },
        {
            key: 'KeyK',
            rus: {
                char: 'л',
                shiftChar: 'Л',
            },
        },
        {
            key: 'KeyL',
            rus: {
                char: 'д',
                shiftChar: 'Д',
            },
        },
        {
            key: 'Semicolon',
            rus: {
                char: 'ж',
                shiftChar: 'Ж',
            },
        },
        {
            key: 'Quote',
            rus: {
                char: 'э',
                shiftChar: 'Э',
            },
        },
        {
            key: 'Enter',
            classes: ['special', 'key--wide'],
            value: 'Enter',
            rus: {
                char: '\n',
            },
            eng: {
                char: '\n',
            },
        },
    ],
    [
        {
            key: 'ShiftLeft',
            classes: ['special', 'key--wide'],
            special: true,
            specialFunc: (context) => { context.shiftKeyDown(); },
            specialFuncUp: (context) => { context.shiftKeyUp(); },
            rus: {
                char: 'Shift',
            },
        },
        {
            key: 'KeyZ',
            rus: {
                char: 'я',
                shiftChar: 'Я',
            },
        },
        {
            key: 'KeyX',
            rus: {
                char: 'ч',
                shiftChar: 'Ч',
            },
        },
        {
            key: 'KeyC',
            rus: {
                char: 'с',
                shiftChar: 'С',
            },
        },
        {
            key: 'KeyV',
            rus: {
                char: 'м',
                shiftChar: 'М',
            },
        },
        {
            key: 'KeyB',
            rus: {
                char: 'и',
                shiftChar: 'И',
            },
        },
        {
            key: 'KeyN',
            rus: {
                char: 'т',
                shiftChar: 'Т',
            },
        },
        {
            key: 'KeyM',
            rus: {
                char: 'ь',
                shiftChar: 'Ь',
            },
        },
        {
            key: 'Comma',
            rus: {
                char: 'б',
                shiftChar: 'Б',
            },
        },
        {
            key: 'Period',
            rus: {
                char: 'ю',
                shiftChar: 'Ю',
            },
        },
        {
            key: 'Slash',
            rus: {
                char: '.',
                shiftChar: ',',
            },
        },
        {
            key: 'ShiftRight',
            classes: ['special', 'key--wide'],
            rus: {
                char: 'Shift',
            },
        },
    ],
    [
        {
            key: 'ControlLeft',
            classes: ['special', 'key--wide'],
            value: 'Ctrl',
            rus: {
                char: '',
            },
        },
        {
            key: 'MetaLeft',
            classes: ['special', 'key--wide'],
            value: 'Win',
            rus: {
                char: '',
            },
        },
        {
            key: 'AltLeft',
            classes: ['special', 'key--wide'],
            value: 'Alt',
            rus: {
                char: '',
            },
        },
        {
            key: 'Space',
            classes: ['special', 'key--xwide'],
            value: '_____',
            rus: {
                char: ' ',
            },
            eng: {
                char: ' ',
            },
        },
        {
            key: 'AltRight',
            classes: ['special', 'key--wide'],
            value: 'Alt',
            rus: {
                char: '',
            },
        },
        {
            key: 'ControlRight',
            classes: ['special', 'key--wide'],
            value: 'Ctrl',
            rus: {
                char: '',
            },
        },
    ],
];

export default keys;
