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
    const hoursDiv = document.createElement('div');
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

    const imgDiv = document.createElement('div');
    const quote = document.createElement('p');
    const chefImg = document.createElement('img');

    chefImg.src = "/pizza-chef.jpg";



    title.innerText = "Antico";
    title.classList.add("title");


    header.classList.add("header");
    ul.classList.add("nav-ul");
    home.classList.add("page");
    hoursDiv.classList.add("hours-div")
    hours.classList.add("hours");
    hoursList.classList.add("hours-list");
    imgDiv.classList.add("img-div");
    chefImg.classList.add("chef-img");
    quote.classList.add("quote");
    

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

    quote.innerText = "Our award-winning chefs craft the finest Italian cuisine in all of Atlanta. Come visit us to find out why Antico is a name synonymous with pizza greatness."
    
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    nav.appendChild(ul);

    content.appendChild(title);
    content.appendChild(header);
    content.appendChild(main);

   
   
    main.appendChild(hoursDiv);
    main.appendChild(imgDiv);
    imgDiv.appendChild(chefImg);
    imgDiv.appendChild(quote);
    hoursDiv.appendChild(hours);
    hoursDiv.appendChild(hoursList);

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