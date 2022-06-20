const createContact = () => {
    const title = document.querySelector('.title');
    const content = document.getElementById('content');
    const mainContact = document.createElement('main');
    const formDiv = document.createElement('div')
    const contactForm = document.createElement('form');
    const contactDiv = document.createElement('div');
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

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');

    textarea.setAttribute('placeholder', 'Send us an email here...')
    textarea.setAttribute('id', 'msg');
    textarea.setAttribute('name', 'msg');

    submitForm.setAttribute('type', 'submit');


    nameLabel.setAttribute('for', 'name');
    emailLabel.setAttribute('for', 'email');
    textareaLabel.setAttribute('for', 'msg');
  

    title.innerText = "Contact";
    nameLabel.innerText = "Name:"
    emailLabel.innerText = "Email:"
    textareaLabel.innerText = "Message:"
    submitForm.innerText = "SEND"

    mainContact.classList.add('mainContact');
    formDiv.classList.add('form-div');
    contactForm.classList.add('form');
    contactDiv.classList.add('contact-div')
    submitForm.classList.add('submit-btn');
    
    

    

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
    
    formDiv.appendChild(contactForm);
    mainContact.appendChild(contactDiv);
    mainContact.appendChild(formDiv);
    content.appendChild(mainContact)
}


export { createContact }