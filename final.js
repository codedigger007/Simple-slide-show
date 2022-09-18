const inputText = document.getElementById("input-text");
const inputButton = document.getElementById("input-button");
const listing = document.getElementById("listings");
const inputDelete = document.getElementById("delete-button");
let listItems = [];

let reloadArr = localStorage.getItem("listReload");
console.log(reloadArr);

if(reloadArr) {
listItems = JSON.parse(reloadArr);
displayList();
}
inputButton.addEventListener("click", function() {
	if(inputText.value){
	listItems.push(inputText.value);
	localStorage.setItem("listReload", JSON.stringify(listItems));
	displayList();
	inputText.value = "";
	}
	
});

function displayList() {
	let listDisplayed = "";
	for(let i = 0; i < listItems.length; i++) {
	listDisplayed += `<li>
	<a href="${listItems[i]}" target="blank_">${listItems[i]}</a>
	</li>
	`
	}
	listing.innerHTML = listDisplayed;
}