const createHome = () => {
    const content = document.getElementById('content');
    const header = document.querySelector('.header');
    const title = document.querySelector('.title');
    const mainHome = document.createElement('main');
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
   
    mainHome.classList.add("mainHome");
    hoursDiv.classList.add("hours-div")
    hours.classList.add("hours");
    hoursList.classList.add("hours-list");
    imgDiv.classList.add("img-div");
    chefImg.classList.add("chef-img");
    quote.classList.add("quote");

    header.style['background-image'] = 'url(../antico-bkgrd.jpg)';
    
    title.innerText = "Antico";
    h2.innerText = "Hours";
    mon.innerText = "Monday..........11AM-9PM"
    tue.innerText = "Tuesday..........11AM-9PM"
    wed.innerText = "Wednesday..........11AM-9PM"
    thu.innerText = "Thursday..........11AM-9PM"
    fri.innerText = "Friday..........11AM-10PM"
    sat.innerText = "Saturday..........11AM-10PM"
    sun.innerText = "Sunday..........11AM-9PM"

    quote.innerText = "Our award-winning chefs craft the finest Italian cuisine in all of Atlanta. Come visit us to find out why Antico is a name synonymous with pizza greatness."
    
    content.appendChild(mainHome);
   
    mainHome.appendChild(hoursDiv);
    mainHome.appendChild(imgDiv);
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

}


export { createHome };