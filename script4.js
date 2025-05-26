const fuel = prompt("Enter Your Fuel Quantity").toLowerCase();

if (fuel > 0.25){
    document.write("Your Fuel is Good")
}else if (fuel == 0.25){
    document.write("Your Fuel is Good")
}
else{
    document.write("Please Refill The Fuel In Your Car")
}