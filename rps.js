function getComputerChoice() {
    const randomval = Math.floor(Math.random() * 3);
    if (randomval === 0) {
        return "scissors";
    }
    if (randomval === 1) {
        return "rock";
    }
    return "paper";
}


function getHumanChoice() {
    return new Promise((resolve) => {
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#ppr');
        const sciBtn = document.querySelector('#sci')

        rockBtn.onclick = () => resolve('rock');
        paperBtn.onclick = () => resolve('paper');
        sciBtn.onclick = () => resolve('scissors')
    });
}



function playRound(humanopt, computeropt) {
    if (humanopt === computeropt) return "draw";
    else if (
        (humanopt === "scissors" && computeropt === "paper") ||
        (humanopt === "rock" && computeropt === "scissors") ||
        (humanopt === "paper" && computeropt === "rock")
    ) {
        return "you win";
    }
    return "you lose";
}


//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.



let Humanscore = 0;
let Computerscore = 0;

const resultDiv = document.querySelector("#results");


async function playGame(){
    while (Computerscore<5 && Humanscore<5){
    let humanopt = await getHumanChoice();
    let computeropt = getComputerChoice();
    let result = playRound(humanopt,computeropt); 

    resultDiv.textContent = result;

    if(result === "youwin"){Humanscore+=1}
    else{Computerscore+=1}
}

    if (Humanscore > Computerscore) {
        resultDiv.textContent = `You win ayo! ${Humanscore} ${Computerscore}`
    } else if (Humanscore < Computerscore) {
        resultDiv.textContent = `you lose! ${Humanscore} ${Computerscore}`
    } else resultDiv.textContent = `draw ${Humanscore} ${Computerscore}`
}

playGame()