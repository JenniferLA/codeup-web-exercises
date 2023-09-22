"use strict";
// alert("yo");


// 1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    let i = 1;
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num*i}`);
        i++;
    }
}

// 2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
    for (let i = 20; i <= 200; i++) {
            if (i === 0) {
                console.log(i + " is even");
        } else if (i % 2 === 0) {
                console.log(i + " is even");
            } else {
                console.log(i + " is odd");
            }
    }

// 3. Create a for loop that uses console.log to create the output shown below.
for (let row = 1; row <= 9; row++) {
    let str = `${row}`;

    for(let j = 1; j < row; j++) {
        str += row;
    }
    console.log(str);
}

// 4. Create a for loop that uses console.log to create the output shown below.
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
