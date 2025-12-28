let userScore = 0;
let compScore= 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};
const drawGame = () => {
    
    msg.innerText = "You Win";
    msg.innerText = "Game was Draw . Play Again!";
    msg.style.backgroundColor = "black";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "blue";
        userScore++;
        userScorePara.innerText = userScore;
    } else{
      
        msg.innerText =  `You Lose. Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) =>{
  
    const compChoice = genCompChoice();
    
    if (userChoice == compChoice) {
    drawGame();
    }
    else{
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false :true;
        }else if (userChoice == "paper") {
            userWin = compChoice === "scissor" ? false :true;
        }
        else{
        
            userWin = compChoice === "rock" ? false :true;
        
        }
        showWinner(userWin, userChoice, compChoice);
        }
    };



choices.forEach((choice)  => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    })
    
})