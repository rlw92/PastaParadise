//navbar
const navBar = () => {let navbar = document.createElement("div");
navbar.classList.add("navbar");

let ablink = document.createElement("div");
ablink.classList.add("link");
ablink.textContent = "About";
ablink.setAttribute('id','about')
navbar.appendChild(ablink);

let menulink = document.createElement("div");
menulink.classList.add("link");
menulink.textContent = "Menu";
menulink.setAttribute('id','menu')
navbar.appendChild(menulink);

let contactlink = document.createElement("div");
contactlink.classList.add("link");
contactlink.textContent = "Contact";
contactlink.setAttribute('id','contact')
navbar.appendChild(contactlink);

document.querySelector("#content").appendChild(navbar);
}

export {navBar};