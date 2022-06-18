const content = document.getElementById('content');

const pageLoad = () => {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    title.innerText = "Antico";
    title.classList.add("title");

    header.classList.add("header");
    ul.classList.add("nav-ul");
    home.classList.add("page");
    home.classList.add("home");
    menu.classList.add("menu");
    contact.classList.add("contact");

    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);

    content.appendChild(title);
    content.appendChild(header);
    header.appendChild(nav);
    
}


export { pageLoad };