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

const heading = document.querySelector("h1");
heading.textContent = "Ramir Astodillo Sr.";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click",function () {
    heading.style.color = "red";
    console.log ("Heading was clicked");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function() {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
