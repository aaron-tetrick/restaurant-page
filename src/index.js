import { pageLoad } from './pageLoad'
import { createHome } from './home';
import { createMenu } from './menu'

pageLoad();
createHome();



const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

console.log(menu);

home.addEventListener('click', selectHome);
menu.addEventListener('click', selectMenu);
contact.addEventListener('click', selectContact);

function selectHome() {
    const mainMenu = document.querySelector('.mainMenu');
    const mainHome = document.querySelector('.mainHome');
    console.log('You clicked home');

    if (menu.className.includes('page')) {
        mainMenu.remove();
    } else if (contact.className.includes('page')) {
        console.log("Remove Contact Page");
    } else if (home.className.includes('page')) {
        console.log("Already on home page");
        console.log(home.className, "|", menu.className)
        return;
    }

    home.classList.add('page');
    menu.classList.remove('page');
    contact.classList.remove('page');
    
    createHome();
};

function selectMenu() {
    const mainHome = document.querySelector('.mainHome');
    const mainMenu = document.querySelector('.mainMenu');
    console.log('You clicked menu');

    if (home.className.includes('page')) {
        mainHome.remove();
    } else if (contact.className.includes('page')) {
        console.log("Remove Contact Page");
    } else if (menu.className.includes('page')) {
        console.log("Already on menu page");
        console.log(home.className, "|", menu.className)
        return;
    }

    home.classList.remove('page');
    menu.classList.add('page');
    contact.classList.remove('page');
    
    createMenu();
};

function selectContact() {
    console.log('You clicked contact');
    home.classList.remove('page');
    menu.classList.remove('page');
    contact.classList.add('page');
};
