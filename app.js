
	Author: Ibor Esteban - https://github.com/IEstebanM
	This game has been made as a result of an exercise of the odin project ( https://www.theodinproject.com ).
	License: CC BY-ND This license lets others reuse the work for any purpose, including commercially;
	however, it cannot be shared with others in adapted form, and credit must be provided to the author. 
    */	


	// Score & Round variables
    let scorePlayer = 0;
    let scoreComputer = 0;
    let scoreGoal = 5;
	let roundCount = 1;


	// Player & Computer hand selected
	let playerHand;
	let playerHandSelected;

	let computerSelector = Array("ROCK", "PAPER", "SCISSORS");   
	let computerSelection;
	

	let animationPlayerEnd = document.getElementById("humanHandImg");
	let animationComputerEnd = document.getElementById("computerHandImg");

	
	
//----------- GAME FUNCTIONS ----------------//

	function displayGame() {
		document.getElementById("titleDiv").style.display = "none"; 
		document.getElementById("gameDiv").style.display = "flex";		
		restartScore();
		}
		
	//Ensure that scores are reset when starting a new game
	function restartScore(){
		scorePlayer = 0;
		document.getElementById("scoreTextPlayer").innerHTML = scorePlayer;
		scoreComputer= 0;
		document.getElementById("scoreTextComputer").innerHTML = scoreComputer;				
		}
		

	
	function handSelected (playerHand) {
		playerHandSelected = playerHand;		
		document.getElementById("selector").style.display = "none"; 
		document.getElementById("playingBox").style.display = "flex"; 
		document.getElementById("titleGameH1").innerHTML = "ROUND "  + roundCount ;
		setImgs();
		changeImgFunctionHuman();
		changeImgFunctionComputer();		
		calcResults();
		newGame ();
	}


	//Change the images to the image of the rock before the animation
	function setImgs() {
		document.getElementById("imgHandHuman").src= "img/rock.png";
		document.getElementById("imgHandComputer").src= "img/rock.png" ;
	}


	//After 1000 milliseconds the image changes to the image of the hand selected by the player.
	function changeImgFunctionHuman() {
		setTimeout(
			function() {
				if (playerHandSelected == "ROCK") {				
					document.getElementById("imgHandHuman").src= "img/rock.png" ;
				}
				else if  (playerHandSelected == "PAPER") {
					document.getElementById("imgHandHuman").src= "img/paper.png" ;
				}
				
				else  {
					document.getElementById("imgHandHuman").src= "img/scissors.png" ;
				}
			
			},  1000);
	}


	//The computer randomly chooses one result from the array
	function computerPlay() {
		computerSelection = computerSelector[Math.floor(Math.random()*computerSelector.length)];					 
	}

	//After 1000 milliseconds the image changes to the image of the hand selected by the computer.
	function changeImgFunctionComputer() {
		setTimeout(
			function() {
				computerPlay();
				if (computerSelection == "ROCK") {				
					document.getElementById("imgHandComputer").src= "img/rock.png" ;
				}
				else if  (computerSelection == "PAPER") {
					document.getElementById("imgHandComputer").src= "img/paper.png" ;
				}
				
				else if (computerSelection == "SCISSORS")  {
					document.getElementById("imgHandComputer").src= "img/scissors.png" ;
				}
					
				
			},  1000);
	}


	//After 1100 ms it calculates the result according to the selected hands.
	function calcResults() {
		setTimeout(
			function() {				
					//If the result is a draw
					if (computerSelection == playerHandSelected) {
						document.getElementById("titleGameH1").innerHTML = "DRAW!";

					}
					//If the player wins
					else if (
						(playerHandSelected == "ROCK" && computerSelection == "SCISSORS") ||
						(playerHandSelected == "PAPER" && computerSelection == "ROCK") ||
						(playerHandSelected == "SCISSORS" && computerSelection == "PAPER") ) {
							document.getElementById("titleGameH1").innerHTML = "YOU WIN!";
							scorePlayer += 1;
							document.getElementById("scoreTextPlayer").innerHTML = scorePlayer;

						}                
					//If the computer wins
					else if (
							(computerSelection == "ROCK" && playerHandSelected == "SCISSORS") ||
							(computerSelection == "PAPER" && playerHandSelected == "ROCK") ||
							(computerSelection == "SCISSORS" && playerHandSelected == "PAPER") ) {
									document.getElementById("titleGameH1").innerHTML = "YOU LOOSE!";
									scoreComputer += 1;
									document.getElementById("scoreTextComputer").innerHTML = scoreComputer;
					}
				
					
		},  1100);
	}


	//Checks whether to start a new game or to continue
	function newGame ()  {
		setTimeout(
			function() {
				//If the player or the computer does not have the target score, the game screen is displayed again.
				if (scorePlayer != scoreGoal && scoreComputer != scoreGoal) {	
					document.getElementById("playingBox").style.display = "none"; 
					document.getElementById("selector").style.display = "flex";				
					document.getElementById("titleGameH1").innerHTML = "CHOOSE AGAIN!";
					roundCount += 1;
				}
				//If the player or the computer has the target score...
					//Check who wins
					//Switches the button listener to the rePlay function
				else {				 	
					document.getElementById("gameDiv").style.display= "none"; 
					document.getElementById("selector").style.display = "none";
					document.getElementById("titleDiv").style.display = "flex"; 
					document.getElementById("titleDivH1").innerHTML = "GAME OVER";
					//If the player has more points than the computer, the player wins..
					if (scorePlayer > scoreComputer) {
						document.getElementById("titleDivH3").innerHTML = "YOU BEAT THE MACHINE!  " + scorePlayer + " - " + scoreComputer;
					}
					//If not, it is the computer...
					else {
						document.getElementById("titleDivH3").innerHTML = "YOU LOST!  " + scorePlayer + " - " + scoreComputer;
					}
					
					document.getElementById("buttonMain").addEventListener("click", rePlay);
					
				}
			}
			
		,  5000);
	}

	

	
	function rePlay() {	
		roundCount = 1;
		document.getElementById("titleGameH1").innerHTML = "ROUND "  + roundCount ;
		document.getElementById("selector").style.display = "flex"; 
		document.getElementById("playingBox").style.display = "none"; 
	}




