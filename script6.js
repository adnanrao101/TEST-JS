const mathNumber = prompt("What is Your Math Number").toLowerCase();
const englishNumber = prompt("What Is Your English Numbers").toLowerCase();
const urduNumber = prompt("What Is Your urdu Numbers").toLowerCase();

document.write("Your Math Number is  " + mathNumber + "<br>" + "Your English Number is " + englishNumber + "<br>" + "Your urdu Number is  " + urduNumber + "<br>")

if (mathNumber > 33) {
    document.write("Congratiols You are Pass in math Subject, And Your Number Is " + mathNumber + "<br>")
} else {
    document.write("You Are Fails in math Subject, And Your Number Is " + mathNumber + "<br>")
}


if (englishNumber > 33) {
    document.write("Congratiols You are Pass in english Subject, And Your Number Is " + englishNumber + "<br>")
} else {
    document.write("You Are Fails in english Subject, And Your Number Is " + englishNumber + "<br>")
}


if (urduNumber > 33) {
    document.write("Congratiols You are Pass in urdu Subject, And Your Number Is " + urduNumber + "<br>")
} else {
    document.write("You Are Fails in urdu Subject, And Your Number Is " + urduNumber + "<br>")
}