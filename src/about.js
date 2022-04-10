import _ from 'lodash';
import './style.css';
import Pastapic from './Pasta.jpg';

const createDiv = () => {
    //header title
    let div = document.createElement("div");
div.style = "background-color:green;text-align:center;font-size:80px;";
div.textContent = "Pasta Paradise"

let about = document.createElement("div");
about.classList.add("about");
about.textContent = "Pasta Paradise is here when you need us. You can click, collect and eat a delicious warm pasta on the go, sit in and eat at our premises or have a piping hot cup of pasta bolognese delivered locally."

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Pastapic;

let imagebox = document.createElement("div");
imagebox.classList.add("imagebox");
imagebox.appendChild(myIcon);




let content = document.querySelector("#content");
content.appendChild(div);
content.appendChild(imagebox);
content.appendChild(about);}


export {createDiv};