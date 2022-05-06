import './styles/style.css';
import Keyboard from './app';
import keys from './keys/keys';

const DOM_KEYBOARD = document.querySelector('[data-name="keyboard"]');
const DOM_TEXTFIELD = document.querySelector('[data-name="textfield"]');
const keyboard = new Keyboard(keys, DOM_KEYBOARD, DOM_TEXTFIELD);
keyboard.createDom();
keyboard.register();
