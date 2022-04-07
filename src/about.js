
const createDiv = () => {let div = document.createElement("div");
div.style = "background-color:green;text-align:center;font-size:100px;";
div.textContent = "Pasta Paradise"
let content = document.querySelector("#content");

content.appendChild(div);}

export {createDiv};