// Task 5: Logical Operators

const MyFavoriteAnimal = 'cat';
const MyFavoriteColor =  'brown';
console.log(MyFavoriteAnimal);
console.log(MyFavoriteColor);

// Get user input
const userFavoriteAnimal = prompt("What's My favorite animal?").toLowerCase();
const userFavoriteColor = prompt("What's My favorite color?").toLowerCase();

// Check if user's choices match Mys using logical operators
if (userFavoriteAnimal === MyFavoriteAnimal && userFavoriteColor === MyFavoriteColor) {
    console.log("Wow, we have the same favorite animal and color!");
} else if (userFavoriteAnimal === MyFavoriteAnimal) {
    console.log("Our favorite animals match!");
} else if (userFavoriteColor === MyFavoriteColor) {
    console.log("Our favorite colors match!");
} else {
    console.log("It seems our favorite animal and/or color don't match.");
}