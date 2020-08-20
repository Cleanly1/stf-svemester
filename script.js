const doc = window.document;
let imagess = doc.querySelectorAll(".switchImage");
let i = 0;
let notPaused = true;
let toggleFirst = false;
let toggleSecond = false;
let toggleLast = false;
let button = doc.querySelector("button");
let text = doc.querySelector(".photoText");
let checkBoxes = doc.querySelectorAll(".box");

const images = [
	"https://images3.alphacoders.com/576/thumb-1920-576331.jpg",
	"https://www.scandinavianphoto.se/globalassets/catalog/blogg/2019/inspiration/kampanjer/naturfotokampanj/utmana-dig-sjalv-som-naturfotograf/jarnasen-dawn-rays-2000px.jpg?ref=DA8765DF3B&w=1920&h=1920&mode=max",
	"https://i.pinimg.com/originals/df/a3/27/dfa327c228465c4bda9c5b17a13a3c40.jpg",
];
const texts = ["Bäversafari", "Skidbacken", "Vinprovning", "Skidbacken"];

for (let i = 0; i < checkBoxes.length - 1; i++) {
	console.log(checkBoxes[i]);
	checkBoxes[i].addEventListener("click", () => {
		console.log("hej");
		checkBoxes[i].innerText = "X";
	});
}

/*
button.addEventListener('click', () => {
	if (button.innerText == "Play") {
		button.innerText = "Pause"
	}else {
		button.innerText = "Play"
	}
	
	if (notPaused) {
		notPaused = false;
	}else {
		notPaused = true;
	}
})

setInterval(() => {
	console.log(i);
	if (notPaused && i == 0 || notPaused && i == 3) {
	imagess.forEach((image)=>{
		image.classList.toggle('swipe')
		
	})
	
	if(i == 3 ){
		i = 0;
	}else {
	i++;
}
text.innerHTML = texts[i];
} else if (notPaused && i == 1 || notPaused && i == 2) {
	imagess.forEach((image)=>{
		image.classList.toggle('swipe2')
	})
	i++;
	text.innerHTML = texts[i];
}

console.log(i);
}, 3 * 1000)
*/
