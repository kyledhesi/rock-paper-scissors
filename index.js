let playerScore = 0;
let computerScore = 0;
let computerMove;
let round = 1;

document.getElementById('rockButton').onclick = function() {
    playGame('Rock');
}

document.getElementById('paperButton').onclick = function() {
    playGame('Paper');
}

document.getElementById('scissorsButton').onclick = function() {
    playGame('Scissors');
}


function playGame(playerMove) {
    computerTurn();

    if ((playerMove == 'Rock' && computerMove == 'Paper') || (playerMove == 'Paper' && computerMove == 'Scissors') 
        || (playerMove == 'Scissors' && computerMove == 'Rock')) {
            computerScore += 1;
            updateMessages('computer');
    } else if ((playerMove == 'Rock' && computerMove == 'Scissors') ||(playerMove == 'Paper' && computerMove == 'Rock') 
        || (playerMove == 'Scissors' && computerMove == 'Paper')) {
            playerScore += 1;
            updateMessages('player');
    } else {
        updateMessages('draw');
    }
    round++;
}

function computerTurn() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    computerMove = moves[(Math.floor(Math.random() * moves.length))];
    console.log('Computers move is ' + computerMove);
    return computerMove;
}

function updateMessages(winner) {
    document.getElementById('round').textContent = `Round: ${round}`;
    document.getElementById('computerMove').textContent = `Computer's move was: ${computerMove}`;
    document.getElementById('scoreMessage').textContent = `Player's Score: ${playerScore} Computer's Score: ${computerScore}`;

    if(winner === 'computer') {
        document.getElementById('winner').textContent = `Winner: Computer`;
    } else if (winner ==='player') {
        document.getElementById('winner').textContent = `Winner: Player`;
    } else if (winner === 'draw') {
        document.getElementById('winner').textContent = `Draw!`;
    }
}
