// alert("hey!");

"use strict";
// alert("Hello, I am an alert!");

// let userChoice = confirm("Wait! Don't leave yet! Can I chat with you!");

// console.log(userChoice);

// if (userChoice === true){
// console.log("yay!")
// } else {
//    console.log("boooo");
// }



let myNumber = 7; 

/*==== PROMPT ===== */

let currentSpeed = prompt("how fast are you driving?");
let plannedSpeed = prompt("how fast do you want to drive?");
let distanceLeft = prompt("how many miles do you have left?");
// Output with template literals
let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60; 
let timeAtPlannedSpeed = (distanceLeft/plannedSpeed) * 60;
let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved} minutes.`);
console.log(timeAtPlannedSpeed);
 
