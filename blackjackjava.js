let cardsJs = document.getElementById("cards");
let sumJs = document.getElementById("sum");
let questionJs = document.getElementById("question");
hasBlackJack = false;
stillAlive = false;
let firstCard = 0;
let secondCard = 0;
let sum = 0;
let cardArr = [];


 function getRandomNumber() {
	 return Math.floor(Math.random() * 13) + 1;
 }
 console.log(getRandomNumber())

function startGame() {
	firstCard = getRandomNumber()
	secondCard = getRandomNumber()
	cardArr = [firstCard, secondCard];
	sum = firstCard + secondCard;
	stillAlive = true;
	 renderGame()
}

function renderGame() {
	cardsJs.textContent = "Cards: "
	sumJs.textContent = "Sum: " 
	for(let i = 0; i < cardArr.length; i++) {
		 cardsJs.textContent += " "+ cardArr[i];
	}
	sumJs.textContent += sum;
	if (sum < 21) {
		questionJs.textContent = "Pick a new card"
		hasBlackJack = false;
		stillAlive = true;
		
	} else if (sum > 21) {
		questionJs.textContent = "You are out of the Game"
		hasBlackJack = false;
		stillAlive = false;
	} else {
		questionJs.textContent = "You have hit Blackjack"
		hasBlackJack = true;
		stillAlive = false;
	}
}


	

function newCard() {
	if(sum) {
	if(hasBlackJack == false && stillAlive == true) {
	let drawCard = getRandomNumber();
	cardArr.push(drawCard);
	sum += drawCard;
	renderGame();
	}
	}
}

console.log(Date())

let trials = [7, 3, 1, 5, 2, 15]

let trailOrder = trials.sort(function(a,b) {
	
		return a - b
})

console.log(trailOrder)