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
    return input = prompt("Enter your option");
}



function playRound(humanopt, computeropt) {
    if (humanopt === computeropt) return "draw";
    else if (
        (humanopt === "scissors" && computeropt === "paper") ||
        (humanopt === "rock" && computeropt === "scissors") ||
        (humanopt === "paper" && computeropt === "rock")
    ) {
        return "youwin";
    }
    return "youlose";
}


function playGame(){
    let Humanscore = 0;
    let Computerscore = 0;

    for (let i = 0; i < 5; i++) {
    let humanopt = getHumanChoice().toLowerCase();
    let computeropt = getComputerChoice();
    let result = playRound(humanopt,computeropt); 

    console.log(result)

    if (result == "youwin"){Humanscore+=1}
    else{Computerscore+= 1}
          
        
    } if (Humanscore > Computerscore) {
        return `You win! ${Humanscore} ${Computerscore}`
    } else if (Humanscore < Computerscore) {
        return `you lose! ${Humanscore} ${Computerscore}`
    }
    return `draw ${Humanscore} ${Computerscore}`


}


console.log(playGame());
