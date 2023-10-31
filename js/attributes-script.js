//Two seconds after the page loads, change the "profile-pic" src attribute to a different image:
const changeProfilePic = document.querySelector("img");
function updatePicture () {
    changeProfilePic.setAttribute("src", "img/puppies.jpg");
}
const newProfilePic = setTimeout(updatePicture, 2000);

//Four seconds after the page loads, use innerHTML to change the name in "profile-name":
const changeProfileName = document.querySelector('h2');
function updateProfileName() {
    changeProfileName.innerHTML = "<h2>Jen</h2>";
}
const newProfileName = setTimeout(updateProfileName, 4000);

//Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text:
function updateProfileDesc() {
    changeProfileDesc = document.querySelector("p");
    changeProfileDesc.classList.add("my-font");
}
const newProfileDesc = setTimeout(updateProfileDesc, 6000);

//Every two seconds change the background color using toggle on the "profile-card" class:
function updateProfileCard() {
    changeProfileCard = document.querySelector("#profile-card");
    changeProfileCard.classList.toggle("my-background")
}
const newProfileCard = setInterval(updateProfileCard, 2000);

//BONUS//
//Encapsulate all your timers in a single function:
