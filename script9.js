// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number
number = Number(number);

// Check if the number is even or odd
if (isNaN(number)) {
    alert("Please enter a valid number.");
} else if (number % 2 === 0) {
    alert(`The number ${number} is even.`);
} else {
    alert(`The number ${number} is odd.`);
}