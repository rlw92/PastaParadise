import {navBar} from './navbar';
import pastab from './pastab.jpg';
import pastam from './pastam.jpeg';
import pastac from './pastac.jpeg';


const createMenu = () => {
    

let menuHead = document.createElement("h1");
menuHead.textContent = "MENU";

let menuItemBox1 = document.createElement("div");
menuItemBox1.classList.add("menuItem");
let menuItemHead1 = document.createElement("h3");
let menuItemContent = document.createElement("div");
menuItemHead1.textContent = "Pasta Bolognese";
menuItemContent.textContent = "A rich tomato sauce with a blend of oregano, basil and pepper mixed with fresh home cooked minced beef and served with fusili pasta shells."
menuItemBox1.appendChild(menuItemHead1);
menuItemBox1.appendChild(menuItemContent);
const img1 = new Image();
img1.src = pastab;
menuItemBox1.appendChild(img1);

let menuItemBox2 = document.createElement("div");
menuItemBox2.classList.add("menuItem");
let menuItemHead2 = document.createElement("h3");
let menuItemContent2 = document.createElement("div");
menuItemHead2.textContent = "Pasta Meatballs";
menuItemContent2.textContent = "A rich tomato sauce with a blend of oregano, basil and pepper, poured over locally sourced 100% beef meatballs and served with fusili pasta shells."
menuItemBox2.appendChild(menuItemHead2);
menuItemBox2.appendChild(menuItemContent2);
const img2 = new Image();
img2.src = pastam;
menuItemBox2.appendChild(img2);

let menuItemBox3 = document.createElement("div");
menuItemBox3.classList.add("menuItem");
let menuItemHead3 = document.createElement("h3");
let menuItemContent3 = document.createElement("div");
menuItemHead3.textContent = "Pasta Cabonara";
menuItemContent3.textContent = "A creamy cheese sauce mixed with fresh ham and  mushrooms and served with fusili pasta shells."
menuItemBox3.appendChild(menuItemHead3);
menuItemBox3.appendChild(menuItemContent3);
const img3 = new Image();
img3.src = pastac;
menuItemBox3.appendChild(img3);



let content = document.querySelector("#content");
content.textContent = "";
navBar();

content.appendChild(menuHead);
content.appendChild(menuItemBox1);
content.appendChild(menuItemBox2);
content.appendChild(menuItemBox3);
document.getElementById("menu").style.backgroundColor = "white";




}
export {createMenu};
