const createMenu = () => {
    const content = document.getElementById('content');
    const mainMenu = document.createElement('main');
    const menu = document.createElement('div');

    menu.innerText = "I am the Menu!";

    mainMenu.classList.add('mainMenu');

    mainMenu.appendChild(menu);
    content.appendChild(mainMenu)
}


export { createMenu }