export default class Keyboard {
    constructor(keys, container, textfield) {
        this.keys = keys;
        this.container = container;
        this.textfield = textfield;
        this.flatkey = null;
    }

    createDom() {
        const board = new DocumentFragment();

        this.keys.forEach((line) => {
            const boardLine = document.createElement('div');
            boardLine.classList.add('keyboard__line');

            line.forEach((key) => {
                const keycap = document.createElement('div');
                keycap.classList.add('key');
                keycap.dataset.key = key.key;
                keycap.dataset.rus = key.rus.char;
                keycap.textContent = key.rus.char;

                boardLine.appendChild(keycap);
            });

            board.appendChild(boardLine);
        });

        this.container.appendChild(board);
    }

    findKey(key) {
        if (!this.flatkey) this.flatkey = this.keys.flat(2);
        return this.flatkey.filter((e) => e.key === key)[0];
    }

    register() {
        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            console.log(event.code);
            this.container
                .querySelector(`[data-key=${event.code}]`)
                .classList.add('active');

            this.textfield.innerHTML += this.findKey(event.code).rus.char;
        });

        document.addEventListener('keyup', (event) => {
            this.container
                .querySelector(`[data-key=${event.code}]`)
                .classList.remove('active');
        });

        this.container.addEventListener('click', (event) => {
            console.log(event.target);
        });
    }
}
