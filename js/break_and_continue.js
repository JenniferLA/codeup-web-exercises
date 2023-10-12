// 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
while (true) {
    let oddNumber = prompt('Enter a odd number between 1 - 50: ');
    let num = parseInt(oddNumber);
        if (num >= 1 && num <=50 && num % 2 !== 0) {
            break;
        } else {
            alert("That number is not valid. Please try again, and enter an odd number between 1 - 50: ");
        }
}


// 2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
function isEven(num) {
    return num % 2 === 0;
}
    let oddNumber = prompt('Enter a odd number between 1 - 50: ');
    let num = parseInt(oddNumber);

    console.log(`Number to skip is ${oddNumber}`);

    for (let i = 0; i < 51; i++) {
        if (i === num) {
            continue;
        }
        if (i === oddNumber) {
            console.log(`Yikes! Skipping number: ${num}`)
        } else {
            console.log(`Here is an odd number: ${i}`)
        }
    }


