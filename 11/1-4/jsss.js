let nimi = prompt("Enter your name, please: ");
let eritalot = ["Ravenclaw", "Huffelpuff", "Slytherin", "Gryffindor"];
let randomi = eritalot[Math.floor(Math.random() * eritalot.length)];
document.write("Congratulations " + nimi + ", you have been placed into the " + randomi + " house.");
