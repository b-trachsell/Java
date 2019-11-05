(()=> {
	console.log('fired!');

	
	let plives = 5, 
		player = document.querySelector("#weapon"),
		computer,
		trigger = document.querySelector("#play"),
		status = document.querySelector(".winlose"),
		computer_lives =5;

	const choices = ["rock", "paper", "scissors"];

	function playGame() {
		console.log("clicked the button");



		computer = choices[Math.floor(Math.random() * choices.length)]	

		let playerchoice = player.value;

// This is a comment

	 	if (computer.toLowerCase() == playerchoice.toLowerCase() ){
	 		status.textContent = "Tie!"
	 	}

	}

	trigger.addEventListener("click", playGame);
})();