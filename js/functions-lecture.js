// function declaration

// start with the `function` keyword
// follow with the name of the function (the name of the function should describe what the function does)
// think of what information you need in order to make this program work: these are the parameters
// you name the parameters and put them in a comma separated list inside the parentheses
// open up a pair of curly braces
// inside the curly braces you put the code that will actually run
// this is called the code block
// finally you create a return statement
function addTwoNumbers(firstNumber, secondNumber){
    const sum = firstNumber + secondNumber;
    return sum;
}

function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel){
    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return timeAtCurrentSpeed - timeAtPlannedSpeed;
}


// ARROW FUNCTION

// Doesn't use the `function` keyword
// Instead you define a variable with a variable name
// that variable name is how you call the function
// you put the parameters inside parentheses
// then you have an `arrow` (angle bracket and equals sign)
// then you have the return value

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }
const addTwoNumbers = (num1, num2) => num1 + num2;



// FUNCTION EXPRESSION (a little outdated after arrow expressions came out and essentially no longer used)
// These have basically been replaced by arrow functions
// The value of this is that you have a variable name that is a reference to a function
// That is useful if you ever need to pass a function to another function, or return a function from a function

const add = function(num1, num2){
    return num1 + num2;
}

let result = add(5,5);
console.log(result);

OR

console.log(add(5,5));

