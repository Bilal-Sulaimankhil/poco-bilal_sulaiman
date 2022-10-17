
// First one
let currentAge = prompt("Enter your Age?");
let retiredAge = prompt("Enter Year of retiring?");

currentAge=parseInt(currentAge);
retiredAge=parseInt(retiredAge);

let remainingYear = retiredAge-currentAge;
let currentYear = new Date().getFullYear();
let retiredYear = currentYear+remainingYear;

window.alert(`You have ${remainingYear} years left until you can retire. It's ${currentYear}, so you can retire in ${retiredYear}.`);
window.alert("You have " + remainingYear + " years left until you can retire. Its " + currentYear + ", so you can reitre in " + retiredYear + ".");


// second one 
function selectFunction (lang){
    let trans ="";
    if (lang=="es"){
                trans="Hola Mundo";
            } else if (lang=="de") {
                trans="Hallo Welt";
            } else if (lang=="en") {
                trans="Hello World";
            } else {
                trans="Please enter es, de or en";
            } return trans;
}
let enteredLanguage = prompt("Please select your langauge");
window.alert(selectFunction(enteredLanguage));


// third one 

let number1 = prompt("Enter  the first number");
let number2 = prompt("Enter the second number");

number1=parseInt(number1);
number2=parseInt(number2);

if (number1>number2){
    window.alert(`The greater number of ${number1} and ${number2} is ${number1}`);
    window.alert(`The smaller number of ${number1} and ${number2} is ${number2}`);
} else {
    window.alert(`The greater number of ${number1} and ${number2} is ${number2}`);
    window.alert(`The smaller number of ${number1} and ${number2} is ${number1}`);
}