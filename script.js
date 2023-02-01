// let i = 10;
// function countdown() {
//   i--;
//   if (i != 0) {
//     setTimeout(showCountdown, 1000);
//   }
// }
// function showCountdown() {
//   document.getElementById("screen").innerText = i;
//   countdown();
// }

// countdown();

/////////////////////////////////////////////////////////

// let array = [123, 456, 789];
// let userID = 123;
// function callGoogleUsers(ID, onSuccess, onFailure) {
//   if (array.includes(ID)) {
//     onSuccess(ID);
//   } else {
//     onFailure(ID);
//   }
// }

// function onSuccess(userID) {
//   document.getElementById("screen2").innerText =
//     "The use information for " + userID + " has been retrieved.";
// }
// function onFailure(userID) {
//   document.getElementById("screen2").innerText =
//     "FAILED! The use information for " + userID + " has not been retrieved.";
// }

// callGoogleUsers(userID, onSuccess, onFailure);

/////////////////////////////////////////////////////////

import { Reader } from "./reader.js";
import { Render } from "./render.js";

document.getElementById("myBtn").addEventListener("click", newInput);

function newInput() {
  let a = new Reader();
  a.inputToHTML();
}
