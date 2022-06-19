const createContact = () => {
    const title = document.querySelector('.title');
    const content = document.getElementById('content');
    const mainContact = document.createElement('main');
    const contact = document.createElement('div');

    title.innerText = "Contact";
    contact.innerText = "I am the Contact Page!";

    mainContact.classList.add('mainContact');

    mainContact.appendChild(contact);
    content.appendChild(mainContact)
}


export { createContact }