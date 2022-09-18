let Counter = 3;
let countEl = document.getElementById("counter");
let saveJav = document.getElementById("saveText");

function increment() {
	Counter = Counter + 3;
	countEl.textContent = Counter;
}
function decrement() {
	Counter = Counter - 1;
	countEl.textContent = Counter;
}



function save() {
	let counterpro = Counter + " - ";
	saveJav.textContent= saveJav.textContent + counterpro;
	countEl.textContent = 0;
	Counter = 0;
}

let number1 = 8;
let number2 = 2;

document.getElementById("numbel").textContent = number1;
document.getElementById("numbel2").textContent = number2;

function add() {
	result = number1 + number2;
	document.getElementById("result").textContent+= result
	
}
function substract() {
	result = number1 - number2;
	document.getElementById("result").textContent+= result
}
function multiply() {
	result = number1 * number2;
	document.getElementById("result").textContent+= result
}
function divide() {
	result = number1 / number2;
	document.getElementById("result").textContent+= result
}

for (let count = 10; count < 101; counter +=10) {
	console.log(counter);
}
