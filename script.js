// MI SCRIVO UNA FUNZIONE CON TIMEOUT CHE MI FACCIA SPARIRE I NUMERI INIZIALI
function myfunction() {
    numberOneEl.style.display = "none";
    numberTwoEl.style.display = "none";
    numberThreeEl.style.display = "none";
    numberFourEl.style.display = "none";
    numberFiveEl.style.display = "none";

    inputSection.classList.remove("d-none");
}

// CREO LE VARIABILI PER SELEZIONARE I NUMERI 

let numberOneEl = document.getElementById('n1') // HTMLElement
let numberOne = Math.round(Math.random() * 100); // Number
numberOneEl.innerHTML = numberOne;

let numberTwoEl = document.getElementById('n2') // HTMLElement
let numberTwo = Math.round(Math.random() * 100); // Number
numberTwoEl.innerHTML = numberTwo;

let numberThreeEl = document.getElementById('n3') // HTMLElement
let numberThree = Math.round(Math.random() * 100); // Number
numberThreeEl.innerHTML = numberThree;

let numberFourEl = document.getElementById('n4') // HTMLElement
let numberFour = Math.round(Math.random() * 100); // Number
numberFourEl.innerHTML = numberFour;

let numberFiveEl = document.getElementById('n5') // HTMLElement
let numberFive = Math.round(Math.random() * 100); // Number
numberFiveEl.innerHTML = numberFive;






// IMPOSTO UNA VARIABILE PER LA SEZIONE CON GLI INPUT 

let inputSection = document.getElementById('input-section');


setTimeout(myfunction, 3000);

// LEGGO I NUMERI DELL'UTENTE

const button = document.querySelector('button');
button.addEventListener('click',function() {
    
const numOneUser = document.getElementById('FirstNumber').value;
const numTwoUser = document.getElementById('SecondNumber').value;
const numThreeUser = document.getElementById('ThirdNumber').value;
const numFourUser = document.getElementById('FourthNumber').value;
const numFiveUser = document.getElementById('FifthNumber').value;

const numbersUserArray = [numOneUser,numTwoUser,numThreeUser,numFourUser,numFiveUser];
console.log(numbersUserArray);

let score = 0;
let numbersFound = []

if (numbersUserArray.includes(numberOne.toString())) {
    score ++;
    numbersFound.push(numberOne)
} else if (numbersUserArray.includes(numberTwo.toString())) {
    score ++;
    numbersFound.push(numberTwo)
} else if (numbersUserArray.includes(numberThree.toString())) {
    score ++;
    numbersFound.push(numberThree)
} else if (numbersUserArray.includes(numberFour.toString())) {
    score ++;
    numbersFound.push(numberFour)
} else if (numbersUserArray.includes(numberFive.toString())) {
    score ++;
    numbersFound.push(numberFive)
} 
console.log('Hai totalizzato un punteggio di', score);
console.log('I numeri esatti che hai inserito sono', numbersFound)

console.log (score)
console.log (numbersFound)
});



