import { appendChilds, makeElement } from './utils.js';
import { buttonWords } from './key.js';

const appContainer = document.getElementById('app');

const initializer = () => {
    const buttonContainer = makeElement({ tag: "div", classes: ["button-container"] })
    const buttons = Array.from({ length: 2 }, () =>
        makeElement({ tag: 'button' })
    );
    buttons[0].innerText = buttonWords.ORDER;
    buttons[1].innerText = buttonWords.PAY;

    buttons[0].addEventListener('click', (e) => {
        console.log('1');
    });

    buttons[1].addEventListener('click', (e) => {
        console.log('2');
    });
    appendChilds(buttonContainer, buttons);
    appendChilds(appContainer, [buttonContainer]);

};

initializer();