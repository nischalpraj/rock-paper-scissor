let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const rndmidx = Math.floor(Math.random() * 3);
  return options[rndmidx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorep.innerText = userScore;
    console.log("Youwin");
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorep.innerText = compScore;
    console.log("Youlose");
    msg.innerText = `You loose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "lightcoral";
};

const playgame = (userChoice) => {
  console.log("userchoice=", userChoice);
  const compChoice = gencompchoice();
  console.log("compchoice=", compChoice);

  //DrawGame
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
