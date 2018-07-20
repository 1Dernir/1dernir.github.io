var ceil = document.getElementsByClassName("game-item"),
	reset = document.getElementById("reset"),
	message = document.getElementById('message'),
	
	stepCount = 0,
	player = "X",
	winCombinations = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[1,5,9],
		[3,5,7]
	],
	winCombinationsLen = winCombinations.length, // длина массива winCombinations
	dataX = [],
	dataO = [];

for (var i = 0; i < ceil.length; i++) {
	ceil[i].addEventListener("click", currentStep);
}

reset.addEventListener("click", resetGame);

function currentStep() {
	var num = +this.getAttribute("data-ceil");
	if (!this.textContent) {
		this.innerText = player;
		if (player === "X") {
			dataX.push(num);
			this.classList.add("x");
		}
		else {
			dataO.push(num);
			this.classList.add("o");
		}

		if ((dataX.length > 2 || dataO > 2) && 
			(checkWin(dataX, num) || checkWin(dataO, num))) {
			for (var i = 0; i < ceil.length; i++) {
				ceil[i].removeEventListener("click", currentStep);
				ceil[i].classList.add("invisibleHover");
			}
			if (player === 'X') {message.classList.add("winX");}
				else {message.classList.add("winO");}
			return (message.innerText = "Победил игрок " + player);
		}
		changePlayer();
		stepCount++;
		if (stepCount === 9) {message.innerText = "Ничья"}
			else {message.innerText = "Ходит игрок " + player}
	}
}

function changePlayer() {
	if (player === "X") {player = "O"}
		else {player = "X"}
}

function resetGame() {
	for (var i = 0; i < ceil.length; i++) {
		ceil[i].innerText = '';
		ceil[i].classList.remove("x", "o", "invisibleHover");
	}
	message.classList.remove("winX", "winO");
	message.innerText = "Ходит игрок X";
	stepCount = 0;
	player = "X";
	dataX = [];
	dataO = [];

	for (var i = 0; i < ceil.length; i++) {
	ceil[i].addEventListener("click", currentStep);
	}
}

function checkWin(arr, num) {
	for (var i = 0; i < winCombinationsLen; i++) {
		var someWinArr = winCombinations[i],
			count = 0;
		if (someWinArr.indexOf(num) !== -1) {
			for (var j = 0, jLen = someWinArr.length; j < jLen; j++) {
				if (arr.indexOf(someWinArr[j]) !== -1) {
					count++;
					if (count === 3) {
						return true;
					}
				}
			}
			count = 0;
		}

	}
}