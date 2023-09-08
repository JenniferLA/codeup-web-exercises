"use strict";
console.log(`Hello from external JavaScript`);
alert("Welcome to my Website!");

//Favorite Color
let userInput = prompt(`What is your favorite color?`);
console.log(`The user entered: ${userInput}`);
let confirmed = confirm(`Great, that's my favorite color too!`);
console.log(confirmed);

//Rental Movies
let littleMermaid = prompt("How many days do you want to rent the Little Mermaid?")
let brotherBear = prompt("How many days do you want to rent BrotherBear?")
let hercules = prompt("How many days do you want to Hercules?")
let rentLittleMermaid = (littleMermaid) * 3;
let rentBrotherBear = (brotherBear) * 3;
let rentHercules = (hercules) * 3;
alert(`Rental fee for Little Mermaid is ${rentLittleMermaid}.`);
alert(`Rental fee for Brother Bear is ${rentBrotherBear}.`);
alert(`Rental fee for Little Mermaid is ${rentHercules}.`);


//Contractor Work for Different Companies
let Google = confirm("You have worked 6 hours for Google this week. Confirm the number of hours worked this week.")
let Amazon = confirm("You have worked 4 hours for Google this week. Confirm the number of hours worked this week.")
let Facebook = confirm("You have worked 10 hours for Google this week. Confirm the number of hours worked this week.")
let payrateGoogle = (Google) * 400;
let payrateAmazon = (Amazon) * 380;
let payrateFacebook = (Facebook) * 350;
alert(`Your pay this week from Google is ${payrateGoogle}.`);
alert(`Your pay this week from Amazon is ${payrateAmazon}.`);
alert(`Your pay this week from Facebook is ${payrateFacebook}.`);

//Student Conditional
let classIsFull= confirm("Is the class full?");
let scheduleConflicts = confirm("Does the class conflict with your schedule?");

let studentCanEnroll = !classIsFull && !scheduleConflicts;
alert(`Can you enroll in this class: ${studentCanEnroll}`);


//Product Offering
let personBoughtMoreThanTwoItems = confirm("Did the person buy more than two items?");
let offerNotExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the person a premium member?");

let productOfferCanBeApplied = (personBoughtMoreThanTwoItems || premiumMember) && !offerNotExpired;
alert(`It is ${productOfferCanBeApplied} that we can apply the offer.`);







