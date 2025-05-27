// Take user inputs
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Check the operation and compute the result using if statements
let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Cannot perform modulus by zero";
    }
} else {
    result = "Invalid operation";
}

// Show the result to the user
document.write("Result: " + result);
