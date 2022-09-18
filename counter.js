
        let firstCard = 5
		let secondCard = 9
		cards = [firstCard, secondCard]
for(i = 0; i < cards.length; i++) {
	console.log(cards[i])
		document.querySelector("body").innerText += cards[i];
	}
	


let person = {
	name: "Kelvin",
	age: 25,
	country: "Nigeria" 
}
function logData() {
	return person.name +" is " + person.age + " years old and lives in " + person.country;
}
console.log(logData())
let age = 69;
if(age < 6 ) {
	console.log("Free");
} else if(age < 18  ) {
	console.log("Child Discount");
}
else if(age < 27 ) {
	console.log("Student Discount");
} else if(age < 67  ) {
	console.log("Full price");
} else {
console.log("Senior Citizen Discount")
}
let largeCountries = ["USA", "INDIA", "NIGERIA", "INDONASIA", "CHINA"];

largeCountries.push("PAKISTAN", "UK");
largeCountries.pop();

for (let i = 0; i < largeCountries.length; i++) {
	console.log(largeCountries[i])
}

let dayOfMonth = 13;
let dateOfMonth = "Friday"

if(dayOfMonth == 13 && dateOfMonth == "Friday") {
	console.log("Scared")
}

let hands = ["rock", "paper", "scssor"];
function getRandomNumber() {
	return Math.floor(Math.random() * 3);
	
}
let a = getRandomNumber()
console.log(hands[a]);
const inputText = document.getElementById("input-text");
let leadTracker = [];

	let listItems = "";
	 for(let i = 0; i < leadTracker.length; i++) {
		listItems += `
		<li>
		<a href ="${leadTracker[i]}" target="_blank">
		${leadTracker[i]}
		</a>
		</li>
		`
		console.log(listItems);
	 }