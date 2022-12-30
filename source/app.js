import { mapListToDOMElements, setFocusAndTitle } from "./domInteractions.js";

class Website {
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
        
    };
};

document.addEventListener('DOMContentLoaded', new Website());