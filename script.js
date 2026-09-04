console.log("Hello, World.");
console.log("From script.js file.");

const myName = "Raijen";
let age = 20;
const myNumber = 9386477995;
const address = "Saravia";


console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${address}`); 
console.log(` ${67}`);

function greet(greetings,names = []) {
    if (Array.isArray(names)) {
        names = names.join(',');
    }
    return ` ${greetings} sa enyu ${names}`;
}
console.log(greet("Mayung aga",["Raijen", "Bai", "Soy", "Tol", "Erp"]));
