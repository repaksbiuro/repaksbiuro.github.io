import { mapListToDOMElements, setFocusAndTitle, menuCross } from "./domInteractions.js";

class Repaks {
    constructor() {
        this.viewElements = {};
        this.InitializeApp();
    };

    InitializeApp = () => {
        this.connectDOMElements();
        this.setupListeners();
        setFocusAndTitle();
    };

    connectDOMElements = () => {
        // Mapping chosen DOM elements to the lists.
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(element => element.id);

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
    };

    setupListeners = () => {
        this.viewElements.menuBtn.addEventListener('click', menuCross);
    };
};

document.addEventListener('DOMContentLoaded', new Repaks());