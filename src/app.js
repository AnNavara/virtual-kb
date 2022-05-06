export default class Keyboard {
    constructor(keys, container, textfield) {
        this.keys = keys;
        this.container = container;
        this.textfield = textfield;
        this.flatkey = null;
        this.lang = 'rus';
    }

    createDom() {
        const board = new DocumentFragment();

        this.keys.forEach((line) => {
            const boardLine = document.createElement('div');
            boardLine.classList.add('keyboard__line');

            line.forEach((key) => {
                const keycap = document.createElement('div');
                keycap.classList.add('key');
                if (key.classes) {
                    key.classes.forEach((cssClass) => keycap.classList.add(cssClass));
                }
                keycap.dataset.key = key.key;
                keycap.dataset.rus = key.rus.char;
                keycap.textContent = key.value ? key.value : key[this.lang].char;

                boardLine.appendChild(keycap);
            });

            board.appendChild(boardLine);
        });

        this.textfield.innerHTML = '';
        this.container.appendChild(board);
    }

    findKey(key) {
        if (!this.flatkey) this.flatkey = this.keys.flat(2);
        return this.flatkey.filter((e) => e.key === key)[0];
    }

    isFocus() {
        return document.activeElement === this.textfield;
    }

    getSelection() {
        const caret = this.textfield.selectionStart;
        const caretEnd = this.textfield.selectionEnd;
        console.log(caret, caretEnd);
        return { caret, caretEnd };
    }

    moveSelectionTo(newStart, newEnd) {
        this.textfield.selectionStart = newStart;
        this.textfield.selectionEnd = newEnd;
    }

    printKey(key) {
        const text = this.textfield.innerHTML;
        const { caret, caretEnd } = this.getSelection();
        // Textfield is not in focus
        if (!this.isFocus()) {
            this.textfield.innerHTML += key.rus.char;
        // Textfield is in focus and only one caret
        } else if (caret === caretEnd) {
            // Caret at end of textfield
            if (caret === text.length) {
                this.textfield.innerHTML += key.rus.char;
            // Caret at start of textfield
            } else if (caret === 0) {
                this.textfield.innerHTML = key.rus.char + text;
            // Caret at middle
            } else {
                this.textfield.innerHTML = text.slice(0, caret)
                + key.rus.char
                + text.slice(caret);
            }
            this.moveSelectionTo(caret + key.rus.char.length, caretEnd + key.rus.char.length);
        // Multiselection
        } else {
            this.textfield.innerHTML = text.slice(0, caret)
            + key.rus.char
            + text.slice(caretEnd);
            this.moveSelectionTo(caret + key.rus.char.length, caret + key.rus.char.length);
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

    register() {
        // Split functions and event listeners
        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            console.log(event.code);
            const keyObj = this.findKey(event.code);
            this.container
                .querySelector(`[data-key=${event.code}]`)
                .classList.add('active');

            if (keyObj.special) {
                keyObj.specialFunc(this);
            } else {
                this.printKey(keyObj);
            }
        });

        document.addEventListener('keyup', (event) => {
            this.container
                .querySelector(`[data-key=${event.code}]`)
                .classList.remove('active');
        });

        this.container.addEventListener('mousedown', (event) => {
            console.log(event.target);
        });
    }
}
