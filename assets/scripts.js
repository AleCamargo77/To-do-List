import { addListClick, addListEnter } from "./functionElements.js";

let enterButton = document.getElementById("enter");
let input = document.getElementById("inputUser");
enterButton.addEventListener("click", addListClick);
input.addEventListener("keypress", addListEnter);
