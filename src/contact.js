import {navBar} from './navbar';

const createContact = () => {
let about = document.createElement("div");
about.classList.add("about");
about.textContent = "If you wish to book a reservation or order a click and collect you can give us a call on 01234567890."

let contact = document.querySelector("#content");
contact.textContent ="";
navBar();
contact.appendChild(about);
document.getElementById("contact").style.backgroundColor = "white";
}

export{createContact};