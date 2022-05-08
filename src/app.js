export default class Keyboard {
    constructor(keys, { container, textfield, languages }) {
        this.keys = keys;
        this.flatkey = null;
        this.container = container;
        this.textfield = textfield;
        this.lang = localStorage.getItem('lang') ?? 'rus';
        this.langList = languages ?? ['rus', 'eng'];
        this.isShift = false;
        this.isCtrl = false;
        this.isAlt = false;
        this.isCapsLock = false;
        this.DEFAULT_KEY = 'char';
        this.SHIFT_KEY = 'shiftChar';
        this.CAPS_KEY = 'capsChar';
    }

    create() {
        const board = new DocumentFragment();

        this.keys.forEach((line) => {
            const boardLine = document.createElement('div');
            boardLine.classList.add('keyboard__line');

            line.forEach((key) => {
                const keycap = document.createElement('div');
                keycap.classList.add('key');
                if (key.cssClasses) {
                    key.cssClasses.forEach((cssClass) => keycap.classList.add(cssClass));
                }
                keycap.dataset.key = key.key;
                keycap.textContent = key.value ? key.value : key[this.lang].char;

                boardLine.appendChild(keycap);
            });

            board.appendChild(boardLine);
        });

        this.flatkey = this.keys.flat(2);
        this.textfield.innerHTML = '';
        this.container.appendChild(board);

        this.registerEvent();
    }

    handleCtrl(active) {
        this.isCtrl = active ?? false;
        this.switchLanguage();
    }

    handleAlt(active) {
        this.isAlt = active ?? false;
        this.switchLanguage();
    }

    handleShift(active) {
        this.isShift = active ?? false;
        this.replaceKeycap('shiftChar');
    }

    handleCapsLock() {
        this.isCapsLock = !this.isCapsLock;
        this.replaceKeycap('capsChar');
    }

    findKey(key) {
        return this.flatkey.filter((e) => e.key === key)[0];
    }

    isFocus() {
        return document.activeElement === this.textfield;
    }

    getSelection() {
        const caret = this.textfield.selectionStart;
        const caretEnd = this.textfield.selectionEnd;
        return { caret, caretEnd };
    }

    moveSelectionTo(newStart, newEnd) {
        this.textfield.selectionStart = newStart;
        this.textfield.selectionEnd = newEnd;
    }

    getLetter(key) {
        let letter = key[this.lang].char;
        if (this.isCapsLock && key[this.lang].capsChar) letter = key[this.lang][this.CAPS_KEY];
        if (this.isShift && key[this.lang].shiftChar) letter = key[this.lang][this.SHIFT_KEY];
        if (this.isCapsLock && this.isShift) {
            letter = key[this.lang][this.CAPS_KEY]
                ? key[this.lang][this.DEFAULT_KEY]
                : key[this.lang][this.SHIFT_KEY];
        }
        return letter;
    }

    printKey(key) {
        const text = this.textfield.innerHTML;
        const letter = this.getLetter(key);
        const { caret, caretEnd } = this.getSelection();
        // Textfield is not in focus
        if (!this.isFocus()) {
            this.textfield.innerHTML += letter;
            this.moveSelectionTo(text.length, text.length);
        // Textfield is in focus and only one caret
        } else if (caret === caretEnd) {
            // Caret at end of textfield
            if (caret === text.length) {
                this.textfield.innerHTML += letter;
            // Caret at start of textfield
            } else if (caret === 0) {
                this.textfield.innerHTML = letter + text;
            // Caret at middle
            } else {
                this.textfield.innerHTML = text.slice(0, caret)
                + letter
                + text.slice(caret);
            }
            this.moveSelectionTo(caret + letter.length, caretEnd + letter.length);
        // Multiselection
        } else {
            this.textfield.innerHTML = text.slice(0, caret)
            + letter
            + text.slice(caretEnd);
            this.moveSelectionTo(caret + letter.length, caret + letter.length);
        }
    }

    removeKey() {
        const text = this.textfield.innerHTML;
        if (!this.isFocus()) {
            this.textfield.innerHTML = text.slice(
                0,
                text.length - 1,
            );
        } else {
            const { caret, caretEnd } = this.getSelection();
            // Single Caret
            if (caret === caretEnd) {
                // Caret at the start
                if (caret === 0) return;
                // Caret at end
                if (caret === text.length) {
                    this.textfield.innerHTML = text.slice(
                        0,
                        text.length - 1,
                    );
                    this.moveSelectionTo(caret - 1, caretEnd - 1);
                // Caret at middle
                } else {
                    this.textfield.innerHTML = text.slice(0, caret - 1)
                    + text.slice(caretEnd);
                    this.moveSelectionTo(caret - 1, caret - 1);
                }
            // Multiselection
            } else {
                this.textfield.innerHTML = text.slice(0, caret)
                + text.slice(caretEnd);
                this.moveSelectionTo(caret, caret);
            }
        }
    }

    replaceKeycap(filterKey) {
        let replaceKey = this.DEFAULT_KEY;
        if (this.isCapsLock) replaceKey = this.CAPS_KEY;
        if (this.isShift) replaceKey = this.SHIFT_KEY;
        this.flatkey
            .filter((keycap) => keycap[this.lang][filterKey])
            .forEach((keycap) => {
                let replace = keycap[this.lang][replaceKey] ?? keycap[this.lang][this.DEFAULT_KEY];
                if (keycap.value) replace = keycap.value;
                this.container.querySelector(`[data-key=${keycap.key}]`).textContent = replace;
            });
    }

    switchLanguage() {
        if (this.isAlt && this.isCtrl) {
            if (this.langList.indexOf(this.lang) + 1 >= this.langList.length) {
                ([this.lang] = this.langList);
            } else {
                this.lang = this.langList[this.langList.indexOf(this.lang) + 1];
            }
            this.replaceKeycap('char');
            localStorage.setItem('lang', this.lang);
        }
    }

    highlightKeycap(code) {
        this.container
            .querySelector(`[data-key=${code}]`)
            .classList.add('active');
    }

    removeHightlight(code) {
        if (code === 'CapsLock' && this.isCapsLock) {
            return;
        }
        this.container
            .querySelector(`[data-key=${code}]`)
            .classList.remove('active');
    }

    moveCaretLeft() {
        const { caret } = this.getSelection();
        if (!this.isFocus()) {
            this.textfield.focus();
            if (caret === 0) return;
            this.moveSelectionTo(
                caret - 1,
                caret - 1,
            );
        } else {
            if (caret === 0) return;
            this.moveSelectionTo(
                caret - 1,
                caret - 1,
            );
        }
    }

    moveCaretRight() {
        const { caret } = this.getSelection();
        if (!this.isFocus()) {
            this.textfield.focus();
        }
        if (caret === this.textfield.innerHTML.length) return;
        this.moveSelectionTo(
            caret + 1,
            caret + 1,
        );
    }

    getFieldPos() {
        const { caret } = this.getSelection();
        const lines = this.textfield.innerHTML.split('\n');
        const isMultiline = lines.length > 1;
        // Get lines length corrected to missing \n
        const linesLengths = lines.map((e) => {
            if (e === '') return 1;
            return e.length + 1;
        });
        linesLengths[linesLengths.length - 1] = linesLengths[linesLengths.length - 1] - 1;
        // Get line position of caret
        let lineIDX = 1;
        // eslint-disable-next-line
        for (let i = 1; i <= linesLengths.length; i++) {
            const sum = linesLengths.slice(0, i).reduce((p, c) => p + c, 0);
            if (caret - sum < 0) {
                lineIDX = i;
                break;
            }
        }
        return {
            caret,
            isMultiline,
            linesLengths,
            lineIDX,
        };
    }

    moveCaretDown() {
        const {
            caret,
            isMultiline,
            linesLengths,
            lineIDX,
        } = this.getFieldPos();
        if (!this.isFocus()) {
            this.textfield.focus();
        } else {
            // Check if caret at the end of textfield
            if (caret === this.textfield.innerHTML.length) return;
            // Check if its multiline
            if (isMultiline) {
                // Dont move Caret if at the last line
                if (linesLengths.length === lineIDX) return;
                // Move Caret to the next line
                const nextLinePos = linesLengths.slice(0, lineIDX).reduce((p, c) => p + c, 0);
                this.moveSelectionTo(nextLinePos, nextLinePos);
            }
        }
    }

    moveCaretUp() {
        const {
            caret,
            isMultiline,
            linesLengths,
            lineIDX,
        } = this.getFieldPos();
        if (!this.isFocus()) {
            this.textfield.focus();
        } else {
            // Check if caret at the start of textfield
            if (caret === 0) return;
            // Check if its multiline
            if (isMultiline) {
                // Move Caret to the previous line
                const prevLinePos = linesLengths.slice(0, lineIDX - 2).reduce((p, c) => p + c, 0);
                this.moveSelectionTo(prevLinePos, prevLinePos);
            }
        }
    }

    keyDown(event) {
        event.preventDefault();
        const keyObj = this.findKey(event.code);
        if (!keyObj) return;
        this.highlightKeycap(event.code);

        if (keyObj.special) {
            keyObj.keyDown(this, event.code);
        } else {
            this.printKey(keyObj);
        }
    }

    keyUp(event) {
        event.preventDefault();
        const keyObj = this.findKey(event.code);
        if (!keyObj) return;
        this.removeHightlight(event.code);

        if (keyObj.special) {
            if (!keyObj.keyUp) return;
            keyObj.keyUp(this);
        }
    }

    mouseDown(event) {
        if (event.target !== event.currentTarget) {
            const keyObj = this.findKey(event.target.dataset.key);
            if (!keyObj) return;
            this.highlightKeycap(event.target.dataset.key);

            if (keyObj.special) {
                keyObj.keyDown(this);
            } else {
                this.printKey(keyObj);
            }
        }
    }

    mouseOut(event) {
        if (event.target !== event.currentTarget) {
            const keyObj = this.findKey(event.target.dataset.key);
            if (!keyObj) return;
            this.removeHightlight(event.target.dataset.key);

            if (keyObj.special) {
                if (!keyObj.keyUp) return;
                keyObj.keyUp(this);
            }
        }
    }

    registerEvent() {
        document.addEventListener('keydown', this.keyDown.bind(this));
        document.addEventListener('keyup', this.keyUp.bind(this));
        this.container.addEventListener('mousedown', this.mouseDown.bind(this));
        this.container.addEventListener('mouseup', this.mouseOut.bind(this));
        this.container.addEventListener('mouseout', this.mouseOut.bind(this));
    }
}
