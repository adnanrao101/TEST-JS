// const city = prompt("write your city")

// if (city == "karachi"){
//     document.write("welcome to city of light")
// }

// if(city == "lahore"){
//     document.write("welcome to historical city of pakistan")
// }

// if(city == "multan"){
//     document.write("welcome to city of saints")
// }

// if (city == "islamabad"){
//     document.write("welcome to capital of pakistan")
// }


const city = prompt("Write your city").toLowerCase(); // Make input lowercase

if (city === "karachi") {
    document.write("Welcome to the city of lights.");
} else if (city === "lahore") {
    document.write("Welcome to the historical city of Pakistan.");
} else if (city === "multan") {
    document.write("Welcome to the city of saints.");
} else if (city === "islamabad") {
    document.write("Welcome to the capital of Pakistan.");
} else {
    document.write("Sorry, this city is not in our list.");
}