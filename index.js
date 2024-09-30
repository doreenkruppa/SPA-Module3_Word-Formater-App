//app logic
import {
  lowerCaseFullString,
  upperCaseFullString,
  capitalizeFirstLetters,
} from "./modules/stringhelper.js";

/////// DOM-Manipulation:
//1. adress elements:
const result = document.querySelector("#result");
const inputfield = document.querySelector("#input-word");
const btnUpperCase = document.querySelector("#btn-uppercase");
const btnLowerCase = document.querySelector("#btn-lowercase");
const btnCapitFirstLetter = document.querySelector(
  "#btn-uppercase-first-letter"
);
//2. add eventlisteners:
btnUpperCase.addEventListener("click", () => {
  result.innerText = upperCaseFullString(inputfield.value);
});
btnLowerCase.addEventListener("click", () => {
  result.innerText = lowerCaseFullString(inputfield.value);
});
btnCapitFirstLetter.addEventListener("click", () => {
  result.innerText = capitalizeFirstLetters(inputfield.value);
});
