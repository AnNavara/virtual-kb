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
            },
            eng: {
                char: '2',
            },
        },
        {
            key: 'Digit3',
            rus: {
                char: '3',
            },
            eng: {
                char: '3',
            },
        },
        {
            key: 'Digit4',
            rus: {
                char: '4',
            },
            eng: {
                char: '4',
            },
        },
        {
            key: 'Digit5',
            rus: {
                char: '5',
            },
            eng: {
                char: '5',
            },
        },
        {
            key: 'Digit6',
            rus: {
                char: '6',
            },
            eng: {
                char: '6',
            },
        },
        {
            key: 'Digit7',
            rus: {
                char: '7',
            },
            eng: {
                char: '7',
            },
        },
        {
            key: 'Digit8',
            rus: {
                char: '8',
            },
            eng: {
                char: '8',
            },
        },
        {
            key: 'Digit9',
            rus: {
                char: '9',
            },
            eng: {
                char: '9',
            },
        },
        {
            key: 'Digit0',
            rus: {
                char: '0',
            },
            eng: {
                char: '0',
            },
        },
        {
            key: 'Minus',
            rus: {
                char: '-',
            },
            eng: {
                char: '-',
            },
        },
        {
            key: 'Equal',
            rus: {
                char: '=',
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
            },
        },
        {
            key: 'KeyW',
            rus: {
                char: 'ц',
            },
        },
        {
            key: 'KeyE',
            rus: {
                char: 'у',
            },
        },
        {
            key: 'KeyR',
            rus: {
                char: 'к',
            },
        },
        {
            key: 'KeyT',
            rus: {
                char: 'е',
            },
        },
        {
            key: 'KeyY',
            rus: {
                char: 'н',
            },
        },
        {
            key: 'KeyU',
            rus: {
                char: 'г',
            },
        },
        {
            key: 'KeyI',
            rus: {
                char: 'ш',
            },
        },
        {
            key: 'KeyO',
            rus: {
                char: 'щ',
            },
        },
        {
            key: 'KeyP',
            rus: {
                char: 'з',
            },
        },
        {
            key: 'BracketLeft',
            rus: {
                char: 'х',
            },
        },
        {
            key: 'BracketRight',
            rus: {
                char: 'ъ',
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
            rus: {
                char: 'CapsLk',
            },
        },
        {
            key: 'KeyA',
            rus: {
                char: 'ф',
            },
        },
        {
            key: 'KeyS',
            rus: {
                char: 'ы',
            },
        },
        {
            key: 'KeyD',
            rus: {
                char: 'в',
            },
        },
        {
            key: 'KeyF',
            rus: {
                char: 'а',
            },
        },
        {
            key: 'KeyG',
            rus: {
                char: 'п',
            },
        },
        {
            key: 'KeyH',
            rus: {
                char: 'р',
            },
        },
        {
            key: 'KeyJ',
            rus: {
                char: 'о',
            },
        },
        {
            key: 'KeyK',
            rus: {
                char: 'л',
            },
        },
        {
            key: 'KeyL',
            rus: {
                char: 'д',
            },
        },
        {
            key: 'Semicolon',
            rus: {
                char: 'ж',
            },
        },
        {
            key: 'Quote',
            rus: {
                char: 'э',
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
            rus: {
                char: 'Shift',
            },
        },
        {
            key: 'KeyZ',
            rus: {
                char: 'я',
            },
        },
        {
            key: 'KeyX',
            rus: {
                char: 'ч',
            },
        },
        {
            key: 'KeyC',
            rus: {
                char: 'с',
            },
        },
        {
            key: 'KeyV',
            rus: {
                char: 'м',
            },
        },
        {
            key: 'KeyB',
            rus: {
                char: 'и',
            },
        },
        {
            key: 'KeyN',
            rus: {
                char: 'т',
            },
        },
        {
            key: 'KeyM',
            rus: {
                char: 'ь',
            },
        },
        {
            key: 'Comma',
            rus: {
                char: 'б',
            },
        },
        {
            key: 'Period',
            rus: {
                char: 'ю',
            },
        },
        {
            key: 'Slash',
            rus: {
                char: '.',
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
            rus: {
                char: 'Ctrl',
            },
        },
        {
            key: 'MetaLeft',
            classes: ['special', 'key--wide'],
            rus: {
                char: 'Win',
            },
        },
        {
            key: 'AltLeft',
            classes: ['special', 'key--wide'],
            rus: {
                char: 'Alt',
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
            rus: {
                char: 'Alt',
            },
        },
        {
            key: 'ControlRight',
            classes: ['special', 'key--wide'],
            rus: {
                char: 'Ctrl',
            },
        },
    ],
];

export default keys;
