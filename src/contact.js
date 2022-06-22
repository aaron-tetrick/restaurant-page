const createContact = () => {
    const title = document.querySelector('.title');
    const content = document.getElementById('content');
    const nav = document.querySelector('nav ul')
    const header = document.querySelector('header');
    const mainContact = document.createElement('main');
    const formDiv = document.createElement('div')
    const contactForm = document.createElement('form');
    const contactContainerDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const contactUl = document.createElement('ul');
    const phone = document.createElement('li');
    const email = document.createElement('li')
    const address = document.createElement('li')
    const addressImg = document.createElement('iframe');
    const formUl = document.createElement('ul');
    const nameLi = document.createElement('li');
    const emailLi = document.createElement('li');
    const textareaLi = document.createElement('li');
    const buttonLi = document.createElement('li');
    const nameInput = document.createElement('input');
    const nameLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const textarea = document.createElement('textarea');
    const textareaLabel = document.createElement('label');
    const submitForm = document.createElement('button');

    contactForm.setAttribute('action', '#');
    contactForm.setAttribute('for', 'post');

    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', '');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', '');

    textarea.setAttribute('placeholder', 'Write us an email here...')
    textarea.setAttribute('id', 'msg');
    textarea.setAttribute('name', 'msg');
    textarea.setAttribute('required', '');

    submitForm.setAttribute('type', 'submit');

    addressImg.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0204135557374!2d-84.47102778255615!3d33.889128100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5104e88569527%3A0xda37e03729f16084!2sAntico%20Pizza%20Battery%20Park!5e0!3m2!1sen!2sus!4v1655795118065!5m2!1sen!2sus");
    addressImg.setAttribute('allowfullscreen', '');
    addressImg.setAttribute('loading', 'lazy');
    addressImg.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    nameLabel.setAttribute('for', 'name');
    emailLabel.setAttribute('for', 'email');
    textareaLabel.setAttribute('for', 'msg');
  

    title.innerText = "Contact";
    nameLabel.innerText = "Name:";
    emailLabel.innerText = "Email:";
    textareaLabel.innerText = "Message:";
    submitForm.innerText = "SEND";

    phone.innerText = "(678)-890-2222";
    email.innerText = "anticopizzeria@gmail.com";
    address.innerText = "2605 Circle 75 Pkwy | Atlanta, GA 30339";

    mainContact.classList.add('mainContact');
    formDiv.classList.add('form-div');
    contactForm.classList.add('form');
    nameLi.classList.add('name');
    emailLi.classList.add('emailInput');
    textarea.classList.add('textarea');
    submitForm.classList.add('submit-btn');

    contactContainerDiv.classList.add('contact-container-div');
    contactDiv.classList.add('contact-div');
    
    contactUl.classList.add('contact-ul');
    phone.classList.add('phone');
    email.classList.add('email');
    address.classList.add('address');
    addressImg.classList.add('address-img');

    header.style['background-image'] = 'url(../pizza-dough.jpeg)';
    header.style['background-position'] = '49% 55%';
    header.style['filter'] = 'grayscale(50%)';
    nav.style['filter'] = 'brightness(150%)';

    console.log(nav);
    

    

    nameLi.appendChild(nameLabel);
    nameLi.appendChild(nameInput);

    emailLi.appendChild(emailLabel);
    emailLi.appendChild(emailInput);

    textareaLi.appendChild(textareaLabel)
    textareaLi.appendChild(textarea)

    buttonLi.appendChild(submitForm);

    formUl.appendChild(nameLi);
    formUl.appendChild(emailLi);
    formUl.appendChild(textareaLi);
    formUl.appendChild(buttonLi);
    
    contactForm.appendChild(formUl);

    contactUl.appendChild(phone);
    contactUl.appendChild(email);
    contactUl.appendChild(address);
    
    contactDiv.appendChild(contactUl);
    contactDiv.appendChild(addressImg);
    contactContainerDiv.appendChild(contactDiv);
    formDiv.appendChild(contactForm);


    mainContact.appendChild(contactContainerDiv);
    mainContact.appendChild(formDiv);
    content.appendChild(mainContact);
}


export { createContact }