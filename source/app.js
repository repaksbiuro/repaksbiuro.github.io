import { mapListToDOMElements, setFocusAndTitle, displayMenu, displayScrollBtn, displayOfferDetails } from "./domInteractions.js";

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
            element => element.id
        );

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
    };

    setupListeners = () => {
        Array.from(document.querySelectorAll('.navbar__links a')).forEach(
            link => link.addEventListener('click', displayMenu)
        );
        Array.from(document.querySelectorAll('.offer__list__item .btn')).forEach(
            button => button.addEventListener('click', displayOfferDetails)
        );

        this.viewElements.menuBtn.addEventListener('click', displayMenu);
        window.addEventListener('scroll', displayScrollBtn);
    };
};

document.addEventListener('DOMContentLoaded', new Repaks());