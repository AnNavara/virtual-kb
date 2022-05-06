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
            cssClasses: ['special', 'key--wide', 'no-text'],
            special: true,
            keyDown: (context) => { context.removeKey(); },
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
            cssClasses: ['special', 'key--wide'],
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
                capsChar: 'Й',
            },
        },
        {
            key: 'KeyW',
            rus: {
                char: 'ц',
                shiftChar: 'Ц',
                capsChar: 'Ц',
            },
        },
        {
            key: 'KeyE',
            rus: {
                char: 'у',
                shiftChar: 'У',
                capsChar: 'У',
            },
        },
        {
            key: 'KeyR',
            rus: {
                char: 'к',
                shiftChar: 'К',
                capsChar: 'К',
            },
        },
        {
            key: 'KeyT',
            rus: {
                char: 'е',
                shiftChar: 'Е',
                capsChar: 'Е',
            },
        },
        {
            key: 'KeyY',
            rus: {
                char: 'н',
                shiftChar: 'Н',
                capsChar: 'Н',
            },
        },
        {
            key: 'KeyU',
            rus: {
                char: 'г',
                shiftChar: 'Г',
                capsChar: 'Г',
            },
        },
        {
            key: 'KeyI',
            rus: {
                char: 'ш',
                shiftChar: 'Ш',
                capsChar: 'Ш',
            },
        },
        {
            key: 'KeyO',
            rus: {
                char: 'щ',
                shiftChar: 'Щ',
                capsChar: 'Щ',
            },
        },
        {
            key: 'KeyP',
            rus: {
                char: 'з',
                shiftChar: 'З',
                capsChar: 'З',
            },
        },
        {
            key: 'BracketLeft',
            rus: {
                char: 'х',
                shiftChar: 'Х',
                capsChar: 'Х',
            },
        },
        {
            key: 'BracketRight',
            rus: {
                char: 'ъ',
                shiftChar: 'Ъ',
                capsChar: 'Ъ',
            },
        },
        {
            key: 'Backslash',
            cssClasses: ['special', 'key--wide'],
            rus: {
                char: '\\',
            },
        },
    ],
    [
        {
            key: 'CapsLock',
            cssClasses: ['special', 'key--wide'],
            special: true,
            keyDown: (context) => { context.capsLock(); },
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
                capsChar: 'Ф',
            },
        },
        {
            key: 'KeyS',
            rus: {
                char: 'ы',
                shiftChar: 'Ы',
                capsChar: 'Ы',
            },
        },
        {
            key: 'KeyD',
            rus: {
                char: 'в',
                shiftChar: 'В',
                capsChar: 'В',
            },
        },
        {
            key: 'KeyF',
            rus: {
                char: 'а',
                shiftChar: 'А',
                capsChar: 'А',
            },
        },
        {
            key: 'KeyG',
            rus: {
                char: 'п',
                shiftChar: 'П',
                capsChar: 'П',
            },
        },
        {
            key: 'KeyH',
            rus: {
                char: 'р',
                shiftChar: 'Р',
                capsChar: 'Р',
            },
        },
        {
            key: 'KeyJ',
            rus: {
                char: 'о',
                shiftChar: 'О',
                capsChar: 'О',
            },
        },
        {
            key: 'KeyK',
            rus: {
                char: 'л',
                shiftChar: 'Л',
                capsChar: 'Л',
            },
        },
        {
            key: 'KeyL',
            rus: {
                char: 'д',
                shiftChar: 'Д',
                capsChar: 'Д',
            },
        },
        {
            key: 'Semicolon',
            rus: {
                char: 'ж',
                shiftChar: 'Ж',
                capsChar: 'Ж',
            },
        },
        {
            key: 'Quote',
            rus: {
                char: 'э',
                shiftChar: 'Э',
                capsChar: 'Э',
            },
        },
        {
            key: 'Enter',
            cssClasses: ['special', 'key--wide'],
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
            cssClasses: ['special', 'key--wide'],
            special: true,
            keyDown: (context) => { context.shiftKeycapDown(); },
            keyUp: (context) => { context.shiftKeycapUp(); },
            rus: {
                char: 'Shift',
            },
        },
        {
            key: 'KeyZ',
            rus: {
                char: 'я',
                shiftChar: 'Я',
                capsChar: 'Я',
            },
        },
        {
            key: 'KeyX',
            rus: {
                char: 'ч',
                shiftChar: 'Ч',
                capsChar: 'Ч',
            },
        },
        {
            key: 'KeyC',
            rus: {
                char: 'с',
                shiftChar: 'С',
                capsChar: 'С',
            },
        },
        {
            key: 'KeyV',
            rus: {
                char: 'м',
                shiftChar: 'М',
                capsChar: 'М',
            },
        },
        {
            key: 'KeyB',
            rus: {
                char: 'и',
                shiftChar: 'И',
                capsChar: 'И',
            },
        },
        {
            key: 'KeyN',
            rus: {
                char: 'т',
                shiftChar: 'Т',
                capsChar: 'Т',
            },
        },
        {
            key: 'KeyM',
            rus: {
                char: 'ь',
                shiftChar: 'Ь',
                capsChar: 'Ь',
            },
        },
        {
            key: 'Comma',
            rus: {
                char: 'б',
                shiftChar: 'Б',
                capsChar: 'Б',
            },
        },
        {
            key: 'Period',
            rus: {
                char: 'ю',
                shiftChar: 'Ю',
                capsChar: 'Ю',
            },
        },
        {
            key: 'Slash',
            rus: {
                char: '.',
                shiftChar: ',',
                capsChar: '.',
            },
        },
        {
            key: 'ShiftRight',
            cssClasses: ['special', 'key--wide'],
            special: true,
            keyDown: (context) => { context.shiftKeycapDown(); },
            keyUp: (context) => { context.shiftKeycapUp(); },
            rus: {
                char: 'Shift',
            },
        },
    ],
    [
        {
            key: 'ControlLeft',
            cssClasses: ['special', 'key--wide'],
            value: 'Ctrl',
            rus: {
                char: '',
            },
        },
        {
            key: 'MetaLeft',
            cssClasses: ['special', 'key--wide'],
            value: 'Win',
            rus: {
                char: '',
            },
        },
        {
            key: 'AltLeft',
            cssClasses: ['special', 'key--wide'],
            value: 'Alt',
            rus: {
                char: '',
            },
        },
        {
            key: 'Space',
            cssClasses: ['special', 'key--xwide'],
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
            cssClasses: ['special', 'key--wide'],
            value: 'Alt',
            rus: {
                char: '',
            },
        },
        {
            key: 'ControlRight',
            cssClasses: ['special', 'key--wide'],
            value: 'Ctrl',
            rus: {
                char: '',
            },
        },
    ],
];

export default keys;
