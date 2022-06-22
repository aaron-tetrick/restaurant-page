const createMenu = () => {
    const title = document.querySelector('.title');
    const content = document.getElementById('content');
    const header = document.querySelector('.header');
    
    const mainMenu = document.createElement('main');

    const menuTitle = document.createElement('h2');
    const pizzaDiv = document.createElement('div');
    const white = document.createElement('div');
    const red = document.createElement('div');
    const calzone = document.createElement('div');
    const redHeader = document.createElement('h3');
    const whiteHeader = document.createElement('h3');
    const calzoneHeader = document.createElement('h3');

    const whiteFoodDiv1 = document.createElement('div');
    const whiteFoodDiv2 = document.createElement('div');
    const whiteFoodDiv3 = document.createElement('div');
    const whiteFoodDiv4 = document.createElement('div');
    const whiteFoodDiv5 = document.createElement('div');

    const redFoodDiv1 = document.createElement('div');
    const redFoodDiv2 = document.createElement('div');
    const redFoodDiv3 = document.createElement('div');
    const redFoodDiv4 = document.createElement('div');
    const redFoodDiv5 = document.createElement('div');

    const calzoneFoodDiv1 = document.createElement('div');
    const calzoneFoodDiv2 = document.createElement('div');
    const calzoneFoodDiv3 = document.createElement('div');

    const whiteFood1 = document.createElement('p');
    const whiteFood2 = document.createElement('p');
    const whiteFood3 = document.createElement('p');
    const whiteFood4 = document.createElement('p');
    const whiteFood5 = document.createElement('p');

    const redFood1 = document.createElement('p');
    const redFood2 = document.createElement('p');
    const redFood3 = document.createElement('p');
    const redFood4 = document.createElement('p');
    const redFood5 = document.createElement('p');

    const calzoneFood1 = document.createElement('p');
    const calzoneFood2 = document.createElement('p');
    const calzoneFood3 = document.createElement('p');

    const whiteIngredients1 = document.createElement('p')
    const whiteIngredients2 = document.createElement('p')
    const whiteIngredients3 = document.createElement('p')
    const whiteIngredients4 = document.createElement('p')
    const whiteIngredients5 = document.createElement('p')

    const redIngredients1 = document.createElement('p')
    const redIngredients2 = document.createElement('p')
    const redIngredients3 = document.createElement('p')
    const redIngredients4 = document.createElement('p')
    const redIngredients5 = document.createElement('p')

    const calzoneIngredients1 = document.createElement('p')
    const calzoneIngredients2 = document.createElement('p')
    const calzoneIngredients3 = document.createElement('p')

    title.innerText = 'Menu';
    menuTitle.innerText = 'PIZZA TRADIZIONALE DI NAPOLI';
    whiteHeader.innerText = 'BIANCHE';
    redHeader.innerText = 'ROSSO';
    calzoneHeader.innerText = 'CALZONI NAPOLETANA';

    whiteFood1.innerText = 'MARGHERITA D.O.P. . . . . . . . . . . . . . . . . . . . . 21';
    whiteFood2.innerText = 'MARINARA . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . 19';
    whiteFood3.innerText = 'SAN GENNARO . . . . . . . .  . . . . . . . . . . . . . . . . . 22';
    whiteFood4.innerText = 'DIAVOLA . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . 22';
    whiteFood5.innerText = 'LASAGNA . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . 21';

    redFood1.innerText = 'POMODORINI . . . . . . . . . . . . . . . . . . . . . . . . . . 21';
    redFood2.innerText = 'NAPOLETANA . . . . . . . . . . . . . . . . . . . . . . . . . . 21';
    redFood3.innerText = 'CAPRICCIOSA . . . . . . . . . . . . . . . . . . . . . . . . . . 22';
    redFood4.innerText = 'BIANCA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20';
    redFood5.innerText = 'VERDURA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20';

    calzoneFood1.innerText = 'FORMAGGIO . . . . . . . . . . . . . . . . . . . . . . . . . 18';
    calzoneFood2.innerText = 'VESUVIO . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . 19';
    calzoneFood3.innerText = 'GIGIOTTO . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20';

    whiteIngredients1.innerText = 'san marzano tomato, bufala, basil, garlic';
    whiteIngredients2.innerText = 'san marzano, garlic, origano, romano, white anchovy';
    whiteIngredients3.innerText = 'salsiccia, dolce piccante pepper, bufala, cipolline';
    whiteIngredients4.innerText = 'spicy sopressata, pepperonata, bufala';
    whiteIngredients5.innerText = 'meatball, ricotta, romano';

    redIngredients1.innerText = 'fresh cherry vesuvian tomato, bufala, garlic, basil';
    redIngredients2.innerText = 'broccoli rabe, salsiccia, buffala';
    redIngredients3.innerText = 'mushroom, artichoke, prosciutto cotto, bufala';
    redIngredients4.innerText = 'fior di latte, ricotta, bufala, pecorino';
    redIngredients5.innerText = 'broccoli rabe, mushroom, pomodorini, garlic';

    calzoneIngredients1.innerText = 'four cheese, fresh garlic, basil';
    calzoneIngredients2.innerText = 'spicy sopressata & prosciutto cotto, pepperonata';
    calzoneIngredients3.innerText = 'broccoli rabe, salsiccia, bufala';

    mainMenu.classList.add('mainMenu');
    menuTitle.classList.add('menu-title');
    pizzaDiv.classList.add('pizza-div');

    white.classList.add('white');
    red.classList.add('red');
    calzone.classList.add('calzone');

    whiteHeader.classList.add('menu-headers');
    redHeader.classList.add('menu-headers');
    calzoneHeader.classList.add('menu-headers');

    whiteFoodDiv1.classList.add('food-divs');
    whiteFoodDiv2.classList.add('food-divs');
    whiteFoodDiv3.classList.add('food-divs');
    whiteFoodDiv4.classList.add('food-divs');
    whiteFoodDiv5.classList.add('food-divs');

    redFoodDiv1.classList.add('food-divs');
    redFoodDiv2.classList.add('food-divs');
    redFoodDiv3.classList.add('food-divs');
    redFoodDiv4.classList.add('food-divs');
    redFoodDiv5.classList.add('food-divs');

    calzoneFoodDiv1.classList.add('food-divs');
    calzoneFoodDiv2.classList.add('food-divs');
    calzoneFoodDiv3.classList.add('food-divs');

    whiteFood1.classList.add('menu-items');
    whiteFood2.classList.add('menu-items');
    whiteFood3.classList.add('menu-items');
    whiteFood4.classList.add('menu-items');
    whiteFood5.classList.add('menu-items');

    redFood1.classList.add('menu-items');
    redFood2.classList.add('menu-items');
    redFood3.classList.add('menu-items');
    redFood4.classList.add('menu-items');
    redFood5.classList.add('menu-items');

    calzoneFood1.classList.add('menu-items');
    calzoneFood2.classList.add('menu-items');
    calzoneFood3.classList.add('menu-items');

    whiteIngredients1.classList.add('ingredients');
    whiteIngredients2.classList.add('ingredients');
    whiteIngredients3.classList.add('ingredients');
    whiteIngredients4.classList.add('ingredients');
    whiteIngredients5.classList.add('ingredients');

    redIngredients1.classList.add('ingredients');
    redIngredients2.classList.add('ingredients');
    redIngredients3.classList.add('ingredients');
    redIngredients4.classList.add('ingredients');
    redIngredients5.classList.add('ingredients');

    calzoneIngredients1.classList.add('ingredients');
    calzoneIngredients2.classList.add('ingredients');
    calzoneIngredients3.classList.add('ingredients');

    header.style['background-image'] = 'url(../imgs/pizza-stove.jpg)';
    header.style['background-position'] = '17% 50%';

    mainMenu.appendChild(menuTitle);
    mainMenu.appendChild(pizzaDiv);

    pizzaDiv.appendChild(white);
    pizzaDiv.appendChild(red);
    pizzaDiv.appendChild(calzone);
    
    white.appendChild(whiteHeader);
    red.appendChild(redHeader);
    calzone.appendChild(calzoneHeader);
    
    white.appendChild(whiteFoodDiv1);
    white.appendChild(whiteFoodDiv2);
    white.appendChild(whiteFoodDiv3);
    white.appendChild(whiteFoodDiv4);
    white.appendChild(whiteFoodDiv5);

    red.appendChild(redFoodDiv1);
    red.appendChild(redFoodDiv2);
    red.appendChild(redFoodDiv3);
    red.appendChild(redFoodDiv4);
    red.appendChild(redFoodDiv5);

    calzone.appendChild(calzoneFoodDiv1);
    calzone.appendChild(calzoneFoodDiv2);
    calzone.appendChild(calzoneFoodDiv3);
    
    whiteFoodDiv1.appendChild(whiteFood1);
    whiteFoodDiv2.appendChild(whiteFood2);
    whiteFoodDiv3.appendChild(whiteFood3);
    whiteFoodDiv4.appendChild(whiteFood4);
    whiteFoodDiv5.appendChild(whiteFood5);

    redFoodDiv1.appendChild(redFood1);
    redFoodDiv2.appendChild(redFood2);
    redFoodDiv3.appendChild(redFood3);
    redFoodDiv4.appendChild(redFood4);
    redFoodDiv5.appendChild(redFood5);

    calzoneFoodDiv1.appendChild(calzoneFood1);
    calzoneFoodDiv2.appendChild(calzoneFood2);
    calzoneFoodDiv3.appendChild(calzoneFood3);
    
    whiteFoodDiv1.appendChild(whiteIngredients1);
    whiteFoodDiv2.appendChild(whiteIngredients2);
    whiteFoodDiv3.appendChild(whiteIngredients3);
    whiteFoodDiv4.appendChild(whiteIngredients4);
    whiteFoodDiv5.appendChild(whiteIngredients5);

    redFoodDiv1.appendChild(redIngredients1);
    redFoodDiv2.appendChild(redIngredients2);
    redFoodDiv3.appendChild(redIngredients3);
    redFoodDiv4.appendChild(redIngredients4);
    redFoodDiv5.appendChild(redIngredients5);

    calzoneFoodDiv1.appendChild(calzoneIngredients1);
    calzoneFoodDiv2.appendChild(calzoneIngredients2);
    calzoneFoodDiv3.appendChild(calzoneIngredients3);

    content.appendChild(mainMenu);
};

export { createMenu }