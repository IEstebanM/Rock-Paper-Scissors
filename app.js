    /*
    Player chooses rock, paper, scissors
    Computer chooses rock, paper, scissors
    If the result is the same, nobody scores
    */

    let scorePlayer = 0;
    let scoreComputer = 0;
    let scoreGoal = 5;

    /* As long as the player or the computer does not have the scoreGoal points, the game continues*/
    
    while (scorePlayer != scoreGoal && scoreComputer != scoreGoal) {  
        let playerSelection = prompt("Please write Rock, Paper or Scissors");
        playerSelection = playerSelection.toUpperCase();  
        
        while (playerSelection !== "ROCK" && playerSelection !== "PAPER"  && playerSelection !== "SCISSORS" ) {
            playerSelection = prompt("Try again! write Rock, Paper or Scissors");
            playerSelection = playerSelection.toUpperCase(); 
        }
        

        let computerSelector = Array("ROCK", "PAPER", "SCISSORS");   
        let computerSelection; 

        function computerPlay(computerSelector) {
            
            computerSelection = computerSelector[Math.floor(Math.random()*computerSelector.length)]; 
            console.log("COMPUTER CHOSE " + computerSelection);  
        }
        


        function playRound(playerSelection, computerSelection) {
            if (computerSelection == playerSelection) {
                console.log("DRAW!")
            }

            else if (
                (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
                (playerSelection == "PAPER" && computerSelection == "ROCK") ||
                (playerSelection == "SCISSORS" && computerSelection == "PAPER") ) {
                    console.log("YOU EARN A POINT!")
                    scorePlayer += 1;
                }                

            else if ((computerSelection == "ROCK" && cplayerSelection == "SCISSORS") ||
                    (computerSelection == "PAPER" && playerSelection == "ROCK") ||
                    (computerSelection == "SCISSORS" && playerSelection == "PAPER") ) {
                        console.log("YOU EARN A POINT!")
                        scoreComputer += 1;
                }
            
        }
        
        computerPlay(computerSelector);
        playRound(playerSelection, computerSelection);
        console.log("PLAYER SCORE: " + scorePlayer + "  COMPUTER SCORE " + scoreComputer );
        
    }


    if (scorePlayer == scoreGoal || scoreComputer == scoreGoal) {
        console.log("Refresh to play again");
    }
    
