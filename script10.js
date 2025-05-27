const temprature = prompt("What Is Today Temprature In Your City").toLowerCase();

if (temprature >= 40){
    document.write("ITS TO HOT OUTSIDE")
}else if(temprature >= 30){
    document.write("TODAY's WEATHER IS NORMAL")
}else if(temprature >= 20){
    document.write("TODAY's WEATHER IS COOL")
}else if(temprature >= 10){
    document.write("TODAY's WEATHER IS SO COOL")
}else{
    document.write("Please Write A Temprature")
}
