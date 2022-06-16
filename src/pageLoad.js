const pageLoad = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    const main = document.createElement('main');
    const hours = document.createElement('div');
    const h2 = document.createElement('h2');
    const hoursList = document.createElement('ul');
    const mon = document.createElement('li');
    const tue = document.createElement('li');
    const wed = document.createElement('li');
    const thu = document.createElement('li');
    const fri = document.createElement('li');
    const sat = document.createElement('li');
    const sun = document.createElement('li');



    title.innerText = "Antico";
    title.classList.add("title");


    header.classList.add("header");
    ul.classList.add("nav-ul");
    home.classList.add("page");
    hours.classList.add("hours");
    hoursList.classList.add("hours-list");
    

    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";
    h2.innerText = "Hours";

    mon.innerText = "Monday..........11AM-9PM"
    tue.innerText = "Tuesday..........11AM-9PM"
    wed.innerText = "Wednesday..........11AM-9PM"
    thu.innerText = "Thursday..........11AM-9PM"
    fri.innerText = "Friday..........11AM-10PM"
    sat.innerText = "Saturday..........11AM-10PM"
    sun.innerText = "Sunday..........11AM-9PM"

    
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);

    content.appendChild(title);
    content.appendChild(header);
    content.appendChild(main);

   

    main.appendChild(hours);
    main.appendChild(hoursList)
    hoursList.appendChild(mon);
    hoursList.appendChild(tue);
    hoursList.appendChild(wed);
    hoursList.appendChild(thu);
    hoursList.appendChild(fri);
    hoursList.appendChild(sat);
    hoursList.appendChild(sun);

    hours.appendChild(h2);
    header.appendChild(nav);

   




}




export { pageLoad };