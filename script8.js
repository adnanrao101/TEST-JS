// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert input to a number type
number = Number(number);

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert(`The number ${number} is divisible by 3.`);
} else {
    alert(`The number ${number} is not divisible by 3.`);
}