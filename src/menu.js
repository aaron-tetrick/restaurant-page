const createMenu = () => {
    const title = document.querySelector('.title');
    const content = document.getElementById('content');
    const mainMenu = document.createElement('main');
    const header = document.querySelector('.header');
    const menuTitle = document.createElement('h2');
    const pizzaDiv = document.createElement('div');
    const white = document.createElement('div');
    const red = document.createElement('div');
    const calzone = document.createElement('div');
    const redHeader = document.createElement('h3');
    const whiteHeader = document.createElement('h3');
    const calzoneHeader = document.createElement('h3');
    const foodDiv1 = document.createElement('div');
    const foodDiv2 = document.createElement('div')
    const foodDiv3 = document.createElement('div')
    const food1 = document.createElement('p');
    const food2 = document.createElement('p');
    const food3 = document.createElement('p');
    const ingredients1 = document.createElement('p')
    const ingredients2 = document.createElement('p')
    const ingredients3 = document.createElement('p')

    title.innerText = 'Menu';
    menuTitle.innerText = 'PIZZA TRADIZIONALE DI NAPOLI';
    whiteHeader.innerText = 'BIANCHE';
    redHeader.innerText = 'ROSSO';
    calzoneHeader.innerText = 'CALZONI NAPOLETANA';
    food1.innerText = 'MARGHERITA D.O.P. . . . . . . . . . . 21';
    food2.innerText = 'MARINARA . . . . . . . . . . . 21';
    food3.innerText = 'SAN GENNARO . . . . . . . . . . . 21';

    ingredients1.innerText = 'san marzano tomato, bufala, basil, garlic'
    ingredients2.innerText = 'san marzano, garlic, origano, romano, white anchovy'
    ingredients3.innerText = 'salsiccia, dolce piccante pepper, bufala, cipolline'

    mainMenu.classList.add('mainMenu');
    menuTitle.classList.add('menu-title');
    pizzaDiv.classList.add('pizza-div');
    white.classList.add('white');
    red.classList.add('red');
    calzone.classList.add('calzone');
    whiteHeader.classList.add('menu-headers');
    redHeader.classList.add('menu-headers');
    calzoneHeader.classList.add('menu-headers');
    foodDiv1.classList.add('food-divs');
    foodDiv2.classList.add('food-divs');
    foodDiv3.classList.add('food-divs');
    food1.classList.add('menu-items');
    food2.classList.add('menu-items');
    food3.classList.add('menu-items');
    ingredients1.classList.add('ingredients');
    ingredients2.classList.add('ingredients');
    ingredients3.classList.add('ingredients');
    header.style['background-image'] = 'url(../pizza-stove.jpg)';
    header.style['background-position'] = '17% 50%';
    

    mainMenu.appendChild(menuTitle);
    mainMenu.appendChild(pizzaDiv);
    pizzaDiv.appendChild(white);
    pizzaDiv.appendChild(red);
    pizzaDiv.appendChild(calzone);
    white.appendChild(whiteHeader);
    white.appendChild(foodDiv1);
    white.appendChild(foodDiv2);
    white.appendChild(foodDiv3);
    foodDiv1.appendChild(food1);
    foodDiv2.appendChild(food2);
    foodDiv3.appendChild(food3);
    foodDiv1.appendChild(ingredients1);
    foodDiv2.appendChild(ingredients2);
    foodDiv3.appendChild(ingredients3);
    content.appendChild(mainMenu);
};



export { createMenu }