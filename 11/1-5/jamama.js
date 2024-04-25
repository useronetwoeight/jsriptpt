let käyttäjänsyöttämänrro = prompt("Enter a number of your choice, I'll tell if it is a leap year or not. ");
if (käyttäjänsyöttämänrro % 4 === 0)
    if (käyttäjänsyöttämänrro % 100 !== 0) {
        document.write(käyttäjänsyöttämänrro + " is a leap year.");
    }
    else if (käyttäjänsyöttämänrro % 400 === 0) {
        document.write(käyttäjänsyöttämänrro + " is a leap year.");
    }
    else {
        document.write(käyttäjänsyöttämänrro + " is not a leap year.");
}
else {
    document.write(käyttäjänsyöttämänrro + " is not a leap year.");
}
