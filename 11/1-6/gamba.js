let idoit = prompt('You want me to calculate some sqroot? write "ok" if affirmative. ');
if (idoit.toLowerCase() === "ok") {
    let idoit2 = parseInt(prompt("Enter a number of your choice, I'll tell you the sqroot of it. "));
    let x = Math.sqrt(idoit2)
    document.write(idoit2 + "s square root is " + x);
    }
else {
    document.write("not ok");
}
