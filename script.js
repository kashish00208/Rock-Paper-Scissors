let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")

let yourScore = document.querySelector("#user-score")
let computer = document.querySelector("#comp-score")
const GetcompChoice = () =>{
    const option = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
}

const DrawGAme = () => {
    msg.innerText = "The game was a draw! Play Again";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        yourScore.innerText = userScore;
        msg.innerText = `You Won Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        computer.innerText = compScore;
        msg.innerText = `You loose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    const compChoice = GetcompChoice();
    if(userChoice === compChoice){
        DrawGAme();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false :true;
        }
        else if(userChoice === "Paper" ){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});