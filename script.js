let userScore =0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const computer_Score = document.querySelector("#computer-score");




const playGame = (userChoice)=>{
    const compChoice = gencompChoice();
    console.log("user choice",userChoice);
    console.log("computer choice",compChoice);
   if(userChoice===compChoice){
    drawGame();
   }
   else
   {
    let userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin = compChoice === "scissor"?false:true;
    }
    else{
        userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
 
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you won !");
        msg.style.backgroundColor = "#7FB685";
        msg.style.borderColor = "#0B6E4F";
        msg.innerText=`Woohoo...You won !, your ${userChoice} beats ${compChoice}`;
        
        userScore++;
        user_Score.innerText=`${userScore}`;
    }else{
        console.log("Better luck... Next time !");
        msg.innerText=`Better luck... Next time ! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "#EF6F6C";
        msg.style.borderColor = "#D7263D";

        computerScore++;
        computer_Score.innerText=`${computerScore}`;
    }
}

const drawGame = ()=>{
    console.log("It was a draw !")
    msg.innerText="I was a draw";
    msg.style.backgroundColor = "#424C55";
    msg.style.borderColor = "#000000";
}

const gencompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



// change mode

let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currentMode="light";
btn.addEventListener("click",() => {
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // body.style.backgroundColor="black";
        // body.style.backgroundColor="black";

        
    }else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // body.style.backgroundColor="white";
    }
    console.log(currentMode);
});
