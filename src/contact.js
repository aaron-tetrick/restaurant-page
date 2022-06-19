const createContact = () => {
    const content = document.getElementById('content');
    const mainContact = document.createElement('main');
    const contact = document.createElement('div');

    contact.innerText = "I am the Contact Page!";

    mainContact.classList.add('mainContact');

    mainContact.appendChild(contact);
    content.appendChild(mainContact)
}


export { createContact }