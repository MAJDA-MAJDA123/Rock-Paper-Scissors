

  function getComputerChoice () {
    let a = Math.floor(Math.random() * 3);
   // let b ;
    if (a == 0) {
       // console.log("rock");/
        b = "rock";
      }
      else if(a == 1) {
        //console.log("paper");
        b = "paper";
      }
      else if(a == 2) {
       // console.log("scissors");
        b = "scissors";
      }
      return b;
  }
function playRound(x,y) { 

    x = x.toLowerCase();
    if (x == "rock" && y == "scissors"){
            b = "you win"; }

    if (x == "rock" && y == "paper"){
            b = "you lose"; }

    if (x == "scissors" && y =="rock"){
            b = "you lose"; }

    if (x == "scissors" && y == "paper"){
            b = "you win"; }

    if (x == "paper" && y == "rock"){
            b = "you win"; }

    if (x == "paper" && y == "scissors"){
            b = "you lose"; }
console.log("you choose "+ x +" Computer Choice " +y)
    return b;

}
//alert(getComputerChoice())
 let x = prompt("Enter your choice ");
//console.log(getComputerChoice())
console.log(playRound(x,getComputerChoice()));
 function game (){
        let playerscore = 0;
        let Computerscore = 0;
        if (playerscore > Computerscore){

        }
 }
 function getComputerChoice() {
        let a = Math.floor(Math.random() * 3);
        // let b ;
        if (a == 0) {
            // console.log("rock");/
            b = "rock";
        }
        else if (a == 1) {
            //console.log("paper");
            b = "paper";
        }
        else if (a == 2) {
            // console.log("scissors");
            b = "scissors";
        }
        return b;
    }
    
    function playRound(x, y) {
    
        x = x.toLowerCase();
        if (x == "rock" && y == "scissors") {
            b = "you win";
        }
    
        if (x == "rock" && y == "paper") {
            b = "you lose";
        }
    
        if (x == "scissors" && y == "rock") {
            b = "you lose";
        }
    
        if (x == "scissors" && y == "paper") {
            b = "you win";
        }
    
        if (x == "paper" && y == "rock") {
            b = "you win";
        }
    
        if (x == "paper" && y == "scissors") {
            b = "you lose";
        }
        if (x == "paper" && y == "paper") {
                b = "It's a Tie";
        } 
        if (x == "rock" && y == "rock") {
                b = "It's a Tie";
        }
        if (x == "scissors" && y == "scissors") {
                b = "It's a Tie";
        }

        console.log("you choose " + x + " Computer Choice " + y)
        return b;
    
    }
    
    function game() {
        let playerScore = 0;
        let computerScore = 0;
    
        for (let round = 1; round <= 5; round++) {
            const playerChoice = prompt('Enter your choice (rock/paper/scissors):');
            const computerChoice = getComputerChoice();
    
            const roundResult = playRound(playerChoice, computerChoice);
    
            if (roundResult.includes('win')) {
                playerScore++;
            } else if (roundResult.includes('lose')) {
                computerScore++;
            }
    
            console.log(`Round ${round}: ${roundResult}`);
        }
    
        if (playerScore > computerScore) {
            console.log(`You win the game! Final score: Player ${playerScore} - Computer ${computerScore}`);
        } else if (playerScore < computerScore) {
            console.log(`You lose the game. Final score: Player ${playerScore} - Computer ${computerScore}`);
        } else {
            console.log(`It's a tie. Final score: Player ${playerScore} - Computer ${computerScore}`);
        }
    }
    
    game();