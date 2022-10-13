// return 'rock', 'paper' or 'scissors'

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
 }

 // get player choice
function getPlayerChoice() {
    let playerChoice = prompt("type: rock, paper, or scissors");
    let result = playerChoice.toLowerCase();
    return result;
  }

// play a single round, returns winner of the round

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
    result = ("You win! Player beats computer.")
    return result;
    }


    else if (
        (playerSelection === computerSelection)
     ) {
        result = ("It\'s a tie!")
        return result;
   }

    else (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) 
        result = ("You lose! Computer beats player.")
        return result;
    }
    
    function game(){
        let compScore = 0;
        let playerScore = 0;


        for (let i = 0; i < 5; i++) {
            const result = playRound(getPlayerChoice(), getComputerChoice());
            console.log(result);
            if (result.includes("win")) {
                playerScore++;
                console.log(`computer: ${compScore} | player: ${playerScore}`);
              } else if (result.includes("lose")) {
                compScore++;
                console.log(`computer: ${compScore} | player: ${playerScore}`);
              }
              
            }
            console.log(
                "Final Results: Player: " + playerScore + " Computer: " + compScore
              );
              if (playerScore > compScore) {
                console.log("You won the game!");
              } else if (playerScore < compScore) {
                console.log("You lost the game.");
              } else if (playerScore === 5) {
                console.log("You won all five rounds! Wow! You win.");
              } else if (compScore === 5) {
                console.log("You lost all five rounds, unfortunate. Computer wins.");
              } else {
                console.log("Game end. Tie");
              }
          }
          
          game();

            


//const playerSelection = "rock";
//const computerSelection = getComputerChoice();

