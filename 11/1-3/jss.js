let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let num3 = parseInt(prompt("Enter the third integer:"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.write("<h2>Number Operations</h2>");
document.write("<p>First number: " + num1 + "</p>");
document.write("<p>Second number: " + num2 + "</p>");
document.write("<p>Third number: " + num3 + "</p>");
document.write("<p>Sum: " + sum + "</p>");
document.write("<p>Product: " + product + "</p>");
document.write("<p>Average: " + average + "</p>");