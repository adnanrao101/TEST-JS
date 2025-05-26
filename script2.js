const gender = prompt("Are You Male Or Female ?").toLowerCase();

if (gender === "male"){
    document.write("GOOD MORNING SIR :)")
} else if (gender === "female") {
    document.write("GOOD MORNING MA'AM :)")
}else{
    document.write("Please select a valid gender.")
}

// function greet() {
//       const gender = document.getElementById("gender").value.toLowerCase();
//       const greeting = document.getElementById("greeting");

//       if (gender === "male") {
//         greeting.textContent = "GOOD MORNING SIR :)";
//       } else if (gender === "female") {
//         greeting.textContent = "GOOD MORNING MA'AM :)";
//       } else {
//         greeting.textContent = "Please select a valid gender.";
//       }
//     }