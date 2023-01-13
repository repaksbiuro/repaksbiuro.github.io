import { mapListToDOMElements, setFocusAndTitle, displayMenu, displayScrollBtn, displayOfferDetails } from "./domInteractions.js";
import { sendFormToAPI } from "./requests.js";

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
        Array.from(document.querySelectorAll('[data-section-name]')).forEach(
            link => link.addEventListener('click', displayMenu)
        );
        Array.from(document.querySelectorAll('.offer__list__item .btn')).forEach(
            button => button.addEventListener('click', displayOfferDetails)
        );

        this.viewElements.menuBtn.addEventListener('click', displayMenu);
        this.viewElements.contactForm.addEventListener('submit', this.sendEmail);
        window.addEventListener('scroll', displayScrollBtn);
    };

    sendEmail = event => {
        event.preventDefault();
        let name = event.target.fname.value;

        if (name.length <= 2) {
            window.alert('Pole "Imię" musi posiadać conajmniej 3 znaki.')
            return false
        };

        let templateParams = {
            fname: name,
            contact_email: event.target.contact_email.value,
            message: event.target.message.value,
        };

        sendFormToAPI(templateParams);
    };
};

document.addEventListener('DOMContentLoaded', new Repaks());