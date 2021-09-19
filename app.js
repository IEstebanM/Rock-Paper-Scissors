    /*
    Player chooses rock, paper, scissors
    Computer chooses rock, paper, scissors
    If the result is the same, nobody scores
    */	


    let scorePlayer = 0;
    let scoreComputer = 0;
    let scoreGoal = 5;
	let roundCount = 0;

	let playerHandSelected = "empty";

	let computerSelector = Array("ROCK", "PAPER", "SCISSORS");   
	let computerSelection= "empty"; 
	

	let animationPlayerEnd = document.getElementById("humanHandImg");
	let animationComputerEnd = document.getElementById("computerHandImg");

	/* Game button play function */
	
	function gameStartButton () {	
			displayGame();
			}

	function displayGame () {
		document.getElementById("titleDiv").style.display = "none"; 
		document.getElementById("gameDiv").style.display = "flex"; 			
		}

	function newRound ()  {
		setTimeout(
			function() {
				if (scorePlayer != scoreGoal && scoreComputer != scoreGoal) {	
					document.getElementById("playingBox").style.display = "none"; 
					document.getElementById("selector").style.display = "flex";				
					document.getElementById("titleGameH1").innerHTML = "CHOOSE AGAIN!";
				}
				
				else {				 	
					document.getElementById("gameDiv").style.display= "none"; 
					document.getElementById("selector").style.display = "none";
					document.getElementById("titleDiv").style.display = "flex"; 
					document.getElementById("titleDivH1").innerHTML = "GAME OVER";
					if (scorePlayer > scoreComputer) {
						document.getElementById("titleDivH3").innerHTML = "YOU BEAT THE MACHINE!";
					}
					else {
						document.getElementById("titleDivH3").innerHTML = "YOU LOST!";
					}
					scorePlayer = 0;
					document.getElementById("scoreTextPlayer").innerHTML = scorePlayer;
					scoreComputer= 0;
					document.getElementById("scoreTextComputer").innerHTML = scoreComputer;
					roundCount = 0;					
					document.getElementById("buttonMain").addEventListener("click", rePlay);
					
				}
			}
			
		,  5000);
	}

	
	/* Reload game */
	
	function rePlay() {			
		document.getElementById("titleGameH1").innerHTML = "ROUND "  + roundCount ;
		document.getElementById("selector").style.display = "flex"; 
		document.getElementById("playingBox").style.display = "none"; 
	}




	
	/* Game Steps */
	function handSelected (playerHand) {
		playerHandSelected = playerHand;
		roundCount += 1;
		document.getElementById("selector").style.display = "none"; 
		document.getElementById("playingBox").style.display = "flex"; 
		document.getElementById("titleGameH1").innerHTML = "ROUND "  + roundCount ;
		setImgs();
		changeImgFunctionHuman();
		changeImgFunctionComputer();		
		calcResults();
		newRound ();
		
	}

	
	
	
	function setImgs() {
		document.getElementById("imgHandHuman").src= "img/rock.png";
		document.getElementById("imgHandComputer").src= "img/rock.png" ;
	}
	
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

	function computerPlay() {
		computerSelection = computerSelector[Math.floor(Math.random()*computerSelector.length)]; 
					 
	}


	function calcResults() {
		setTimeout(
			function() {				
				
					if (computerSelection == playerHandSelected) {
						document.getElementById("titleGameH1").innerHTML = "DRAW!";

					}

					else if (
						(playerHandSelected == "ROCK" && computerSelection == "SCISSORS") ||
						(playerHandSelected == "PAPER" && computerSelection == "ROCK") ||
						(playerHandSelected == "SCISSORS" && computerSelection == "PAPER") ) {
							document.getElementById("titleGameH1").innerHTML = "YOU WIN!";
							scorePlayer += 1;
							document.getElementById("scoreTextPlayer").innerHTML = scorePlayer;

						}                

					else if (
							(computerSelection == "ROCK" && playerHandSelected == "SCISSORS") ||
							(computerSelection == "PAPER" && playerHandSelected == "ROCK") ||
							(computerSelection == "SCISSORS" && playerHandSelected == "PAPER") ) {
									document.getElementById("titleGameH1").innerHTML = "YOU LOOSE!";
									scoreComputer += 1;
									document.getElementById("scoreTextComputer").innerHTML = scoreComputer;
					}
				
					
			},  1500);
	}



	

	


  
