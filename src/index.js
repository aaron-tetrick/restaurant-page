import { pageLoad } from './pageLoad';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

pageLoad();
createHome();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', selectHome);
menu.addEventListener('click', selectMenu);
contact.addEventListener('click', selectContact);



function selectHome() {
    const mainMenu = document.querySelector('.mainMenu');
    const mainContact = document.querySelector('.mainContact');
    if (menu.className.includes('page')) {
        mainMenu.remove();
    } else if (contact.className.includes('page')) {
        mainContact.remove();
    } else if (home.className.includes('page')) {
        return;
    }

    home.classList.add('page');
    menu.classList.remove('page');
    contact.classList.remove('page');

    createHome();
};

function selectMenu() {
    const mainHome = document.querySelector('.mainHome');
    const mainContact = document.querySelector('.mainContact');
    if (home.className.includes('page')) {
        mainHome.remove();
    } else if (contact.className.includes('page')) {
        mainContact.remove();
    } else if (menu.className.includes('page')) {
        return;
    }

    home.classList.remove('page');
    menu.classList.add('page');
    contact.classList.remove('page');
    
    createMenu();
};

function selectContact() {
    const mainHome = document.querySelector('.mainHome');
    const mainMenu = document.querySelector('.mainMenu');
    if (home.className.includes('page')) {
        mainHome.remove();
    } else if (menu.className.includes('page')) {
        mainMenu.remove();
    } else if (contact.className.includes('page')) {
        return;
    }

    home.classList.remove('page');
    menu.classList.remove('page');
    contact.classList.add('page');

    createContact();
};