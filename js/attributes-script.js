//3.1 Two seconds after the page loads, change the "profile-pic" src attribute to a different image.

// const changeProfilePic = document.querySelector("img");
// console.log(changeProfilePic);
// let newPic = 'https://www.pexels.com/photo/four-assorted-color-puppies-2827238/';
//
// for (let i = 0; i < changeProfilePic; i += 2000) {
//     changeProfilePic.src.replace(newPic);
// }

const changeProfilePic = document.querySelector("img");
// changeProfilePic.setAttribute("src", "img/puppies.jpg");

function updatePicture () {
    changeProfilePic.setAttribute("src", "img/puppies.jpg");
}

const newProfilePic = setTimeout(updatePicture, 2000);


//3.2 Four seconds after the page loads, use innerHTML to change the name in "profile-name".
const changeProfileName = document.querySelector('h2');
function updateProfileName () {
    changeProfileName.innerHTML = "<h2>Jen</h2>";
}

const newProfileName = setTimeout(updateProfileName, 4000);



//3.3 Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
const changeProfileStyle = document.querySelector('p');
console.log(changeProfileStyle.classList);
changeProfileStyle.classList.add('text-color');
console.log(changeProfileStyle.classList);


// function updateProfileStyle () {
//     changeProfileStyle.add()
// }