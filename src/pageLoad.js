const pageLoad = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const h2 = document.createElement('h2');



    title.innerText = "Antico Pizza Napoletana";
    title.classList.add("title");


    header.classList.add("header");

    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    h2.innerText = "Home";

    
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);
    content.appendChild(title);
    content.appendChild(header);
    content.appendChild(h2);
    header.appendChild(nav);

   




}




export { pageLoad };