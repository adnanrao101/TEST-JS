const signal = prompt("What Traffic Signal Color Is ?").toLowerCase();

if (signal === "red"){
    document.write("MUST STOP")
}else if (signal === "yellow"){
    document.write("READY TO MOVE")
}else if (signal === "green"){
    document.write("MOVE NOW")
}else{
    document.write("Please select any color")
}