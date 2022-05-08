import './styles/style.css';
import Keyboard from './app';
import keys from './keys/keys';

const BODY = document.querySelector('body');

const createContent = (type, inner, cssClasses, parent, attribute) => {
    const content = document.createElement(type);
    cssClasses.forEach((element) => {
        content.classList.add(element);
    });
    if (attribute) {
        Object.keys(attribute).forEach((key) => {
            if (key.includes('data')) {
                content.dataset[key.split('-')[1]] = attribute[key];
            } else {
                content[key] = attribute[key];
            }
        });
    }
    content.innerHTML = inner;
    parent.append(content);
};

createContent('header', '', ['header'], BODY);
createContent('h1', 'Virtual Keyboard', [], document.querySelector('header.header'));
createContent('textarea', '', ['textarea'], BODY, { 'data-name': 'textfield', cols: 50, rows: 5 });
createContent('div', '', ['keyboard'], BODY, { 'data-name': 'keyboard' });
createContent('p', 'Ctrl + Alt to change language; Created in OS Windows', [], BODY);

const kb = new Keyboard(keys, {
    container: document.querySelector('[data-name="keyboard"]'),
    textfield: document.querySelector('[data-name="textfield"]'),
});
kb.create();
