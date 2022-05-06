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
                shiftChar: '#',
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
                shiftChar: '$',
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
                shiftChar: '%',
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
                shiftChar: '^',
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
                shiftChar: '&',
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
                shiftChar: '*',
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
                shiftChar: '(',
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
                shiftChar: ')',
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
                shiftChar: '_',
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
                shiftChar: '+',
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
            eng: {
                char: 'q',
                shiftChar: 'Q',
                capsChar: 'Q',
            },
        },
        {
            key: 'KeyW',
            rus: {
                char: 'ц',
                shiftChar: 'Ц',
                capsChar: 'Ц',
            },
            eng: {
                char: 'w',
                shiftChar: 'W',
                capsChar: 'W',
            },
        },
        {
            key: 'KeyE',
            rus: {
                char: 'у',
                shiftChar: 'У',
                capsChar: 'У',
            },
            eng: {
                char: 'e',
                shiftChar: 'E',
                capsChar: 'E',
            },
        },
        {
            key: 'KeyR',
            rus: {
                char: 'к',
                shiftChar: 'К',
                capsChar: 'К',
            },
            eng: {
                char: 'r',
                shiftChar: 'R',
                capsChar: 'R',
            },
        },
        {
            key: 'KeyT',
            rus: {
                char: 'е',
                shiftChar: 'Е',
                capsChar: 'Е',
            },
            eng: {
                char: 't',
                shiftChar: 'T',
                capsChar: 'T',
            },
        },
        {
            key: 'KeyY',
            rus: {
                char: 'н',
                shiftChar: 'Н',
                capsChar: 'Н',
            },
            eng: {
                char: 'y',
                shiftChar: 'Y',
                capsChar: 'Y',
            },
        },
        {
            key: 'KeyU',
            rus: {
                char: 'г',
                shiftChar: 'Г',
                capsChar: 'Г',
            },
            eng: {
                char: 'u',
                shiftChar: 'U',
                capsChar: 'U',
            },
        },
        {
            key: 'KeyI',
            rus: {
                char: 'ш',
                shiftChar: 'Ш',
                capsChar: 'Ш',
            },
            eng: {
                char: 'i',
                shiftChar: 'I',
                capsChar: 'I',
            },
        },
        {
            key: 'KeyO',
            rus: {
                char: 'щ',
                shiftChar: 'Щ',
                capsChar: 'Щ',
            },
            eng: {
                char: 'o',
                shiftChar: 'O',
                capsChar: 'O',
            },
        },
        {
            key: 'KeyP',
            rus: {
                char: 'з',
                shiftChar: 'З',
                capsChar: 'З',
            },
            eng: {
                char: 'p',
                shiftChar: 'P',
                capsChar: 'P',
            },
        },
        {
            key: 'BracketLeft',
            rus: {
                char: 'х',
                shiftChar: 'Х',
                capsChar: 'Х',
            },
            eng: {
                char: '[',
                shiftChar: '{',
                capsChar: '[',
            },
        },
        {
            key: 'BracketRight',
            rus: {
                char: 'ъ',
                shiftChar: 'Ъ',
                capsChar: 'Ъ',
            },
            eng: {
                char: ']',
                shiftChar: '}',
                capsChar: ']',
            },
        },
        {
            key: 'Backslash',
            cssClasses: ['special', 'key--wide'],
            rus: {
                char: '\\',
                shiftChar: '/',
            },
            eng: {
                char: '\\',
                shiftChar: '|',
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
            eng: {
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
            eng: {
                char: 'a',
                shiftChar: 'A',
                capsChar: 'A',
            },
        },
        {
            key: 'KeyS',
            rus: {
                char: 'ы',
                shiftChar: 'Ы',
                capsChar: 'Ы',
            },
            eng: {
                char: 's',
                shiftChar: 'S',
                capsChar: 'S',
            },
        },
        {
            key: 'KeyD',
            rus: {
                char: 'в',
                shiftChar: 'В',
                capsChar: 'В',
            },
            eng: {
                char: 'd',
                shiftChar: 'D',
                capsChar: 'D',
            },
        },
        {
            key: 'KeyF',
            rus: {
                char: 'а',
                shiftChar: 'А',
                capsChar: 'А',
            },
            eng: {
                char: 'f',
                shiftChar: 'F',
                capsChar: 'F',
            },
        },
        {
            key: 'KeyG',
            rus: {
                char: 'п',
                shiftChar: 'П',
                capsChar: 'П',
            },
            eng: {
                char: 'g',
                shiftChar: 'G',
                capsChar: 'G',
            },
        },
        {
            key: 'KeyH',
            rus: {
                char: 'р',
                shiftChar: 'Р',
                capsChar: 'Р',
            },
            eng: {
                char: 'h',
                shiftChar: 'H',
                capsChar: 'H',
            },
        },
        {
            key: 'KeyJ',
            rus: {
                char: 'о',
                shiftChar: 'О',
                capsChar: 'О',
            },
            eng: {
                char: 'j',
                shiftChar: 'J',
                capsChar: 'J',
            },
        },
        {
            key: 'KeyK',
            rus: {
                char: 'л',
                shiftChar: 'Л',
                capsChar: 'Л',
            },
            eng: {
                char: 'k',
                shiftChar: 'K',
                capsChar: 'K',
            },
        },
        {
            key: 'KeyL',
            rus: {
                char: 'д',
                shiftChar: 'Д',
                capsChar: 'Д',
            },
            eng: {
                char: 'l',
                shiftChar: 'L',
                capsChar: 'L',
            },
        },
        {
            key: 'Semicolon',
            rus: {
                char: 'ж',
                shiftChar: 'Ж',
                capsChar: 'Ж',
            },
            eng: {
                char: ';',
                shiftChar: ':',
                capsChar: ';',
            },
        },
        {
            key: 'Quote',
            rus: {
                char: 'э',
                shiftChar: 'Э',
                capsChar: 'Э',
            },
            eng: {
                char: '\'',
                shiftChar: '"',
                capsChar: '\'',
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
            eng: {
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
            eng: {
                char: 'z',
                shiftChar: 'Z',
                capsChar: 'Z',
            },
        },
        {
            key: 'KeyX',
            rus: {
                char: 'ч',
                shiftChar: 'Ч',
                capsChar: 'Ч',
            },
            eng: {
                char: 'x',
                shiftChar: 'X',
                capsChar: 'X',
            },
        },
        {
            key: 'KeyC',
            rus: {
                char: 'с',
                shiftChar: 'С',
                capsChar: 'С',
            },
            eng: {
                char: 'c',
                shiftChar: 'C',
                capsChar: 'C',
            },
        },
        {
            key: 'KeyV',
            rus: {
                char: 'м',
                shiftChar: 'М',
                capsChar: 'М',
            },
            eng: {
                char: 'v',
                shiftChar: 'V',
                capsChar: 'V',
            },
        },
        {
            key: 'KeyB',
            rus: {
                char: 'и',
                shiftChar: 'И',
                capsChar: 'И',
            },
            eng: {
                char: 'b',
                shiftChar: 'B',
                capsChar: 'B',
            },
        },
        {
            key: 'KeyN',
            rus: {
                char: 'т',
                shiftChar: 'Т',
                capsChar: 'Т',
            },
            eng: {
                char: 'n',
                shiftChar: 'N',
                capsChar: 'N',
            },
        },
        {
            key: 'KeyM',
            rus: {
                char: 'ь',
                shiftChar: 'Ь',
                capsChar: 'Ь',
            },
            eng: {
                char: 'm',
                shiftChar: 'M',
                capsChar: 'M',
            },
        },
        {
            key: 'Comma',
            rus: {
                char: 'б',
                shiftChar: 'Б',
                capsChar: 'Б',
            },
            eng: {
                char: ',',
                shiftChar: '<',
                capsChar: ',',
            },
        },
        {
            key: 'Period',
            rus: {
                char: 'ю',
                shiftChar: 'Ю',
                capsChar: 'Ю',
            },
            eng: {
                char: '.',
                shiftChar: '>',
                capsChar: '.',
            },
        },
        {
            key: 'Slash',
            rus: {
                char: '.',
                shiftChar: ',',
                capsChar: '.',
            },
            eng: {
                char: '/',
                shiftChar: '?',
                capsChar: '/',
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
            eng: {
                char: 'Shift',
            },
        },
    ],
    [
        {
            key: 'ControlLeft',
            cssClasses: ['special', 'key--wide'],
            value: 'Ctrl',
            special: true,
            keyDown: (context) => { context.addCtrl(); },
            keyUp: (context) => { context.removeCtrl(); },
            rus: {
                char: '',
            },
            eng: {
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
            eng: {
                char: '',
            },
        },
        {
            key: 'AltLeft',
            cssClasses: ['special', 'key--wide'],
            value: 'Alt',
            special: true,
            keyDown: (context) => { context.addAlt(); },
            keyUp: (context) => { context.removeAlt(); },
            rus: {
                char: '',
            },
            eng: {
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
            special: true,
            keyDown: (context) => { context.addAlt(); },
            keyUp: (context) => { context.removeAlt(); },
            rus: {
                char: '',
            },
            eng: {
                char: '',
            },
        },
        {
            key: 'ControlRight',
            cssClasses: ['special', 'key--wide'],
            value: 'Ctrl',
            special: true,
            keyDown: (context) => { context.addCtrl(); },
            keyUp: (context) => { context.removeCtrl(); },
            rus: {
                char: '',
            },
            eng: {
                char: '',
            },
        },
    ],
];

export default keys;
