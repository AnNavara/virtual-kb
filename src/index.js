import Keyboard from './app';
// eslint-disable-next-line
import css from './styles/style.css';
import keys from './keys/keys';

const DOM_KEYBOARD = document.querySelector('[data-name="keyboard"]');
const DOM_TEXTFIELD = document.querySelector('[data-name="textfield"]');
const keyboard = new Keyboard(keys, DOM_KEYBOARD, DOM_TEXTFIELD);
keyboard.createDom();
keyboard.register();
