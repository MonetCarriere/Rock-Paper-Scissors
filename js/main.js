const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

//Play Game

function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//Get Computers Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Get Game Winner  (p stands for "player" c stands for "computer");
function getWinner(p,c) {
    if(p === c) {
        return 'draw';
    }else if (p === 'rock'){
        if(c === 'paper') {
            return 'computer';
        }else{
            return 'player';
        }
       } else if (p === 'paper') {
           if(c  === 'scissors') {
            return 'computer';
           }else{
               return 'player';
           }
       } else if(p === 'scissors') {
        if(c === 'rock'){
            return 'computer';
        }else{
            return 'player';
        }
      }
    }

//Shows the Winner

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        //increment player score
        scoreboard.player++;
        //show modal result
        result.innerHTML = `
        <h1 class="text-win>You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else if(winner === 'computer') {
        //increment player score
        scoreboard.computer++;
        //show modal result
        result.innerHTML = `
        <h1>You Lose</h1> 
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else{
        result.innerHTML =  `
        <h1>It's a draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }

    //Show Score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}


    
//Clear Modal

function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}


//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);





