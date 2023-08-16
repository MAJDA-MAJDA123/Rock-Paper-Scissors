
//Task 6: Comparison Operators
const prompt=require("prompt-sync")({sigint:true});

// Get user input
const userInput = Number(prompt(" Enter a number: "));

// Check if the number is positive, negative, or zero using comparison operators
if (userInput > 0) {
    console.log("The number is positive.");
} else if (userInput < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}





