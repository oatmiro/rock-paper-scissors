// return 'rock', 'paper' or 'scissors'

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
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

    //else if (
        //(playerSelection === computerSelection)
    // ) 
       // result = ("It\'s a tie!")
      //  return result;
   // }

//playerSelection must convert to lowercase, as computer selection is lowercase

    //else if (playerSelection === computerSelection) {
       // result = ("It\'s a tie!")
      //  return result;
 //   }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));