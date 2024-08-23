userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {

     let options = ["rock", "paper", "scissor"];
     const ranInd = Math.floor(Math.random() * 3);
     return options[ranInd];
}

const drawGame = () => {
     console.log("Game Draw");
     msg.innerText = "Game Draw : PLay again";
     msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, comChoice) => {
     
     if(userWin) {
     
     userScore++;
     userScorePara.innerText = userScore;

     console.log("congrats You won!");
     msg.innerText = `You win! ${userChoice} beats ${comChoice}`;
     msg.style.backgroundColor = "greenyellow";

     }
     else {
     
     compScore++;
     compScorePara.innerText = compScore;

     console.log("You lose");
     msg.innerText = `You Lost ${comChoice} beats ${userChoice}`;
     msg.style.backgroundColor = "red";
     }
}
const playGame = (userChoice) => {
     console.log("user choice = ", userChoice);
     
     const comChoice = genCompChoice();
     console.log("computer choice = ", comChoice);

     if(userChoice === comChoice) {
          drawGame();
     }
     else {
          let userWin = true;

          if(userChoice === "rock") {
               userWin = comChoice === "paper" ? false : true;
          }
          else if (userChoice === "paper") {
               userWin = comChoice === "scissor" ? false : true;
          }
          else {
               userWin = comChoice === "rock" ? false : true;
          }
          showWinner(userWin, userChoice, comChoice);
     }
}

choices.forEach((choice) => {
     
     choice.addEventListener("click", () => {

          const userChoice = choice.getAttribute("id");

          playGame(userChoice);
     });
});