import { mapListToDOMElements, setFocusAndTitle, displayMenu } from "./domInteractions.js";

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
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(
            element => element.id);

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
    };

    setupListeners = () => {
        Array.from(document.querySelectorAll('.navbar__links a')).forEach(
            link => link.addEventListener('click', displayMenu));

        this.viewElements.menuBtn.addEventListener('click', displayMenu);
    };
};

document.addEventListener('DOMContentLoaded', new Repaks());