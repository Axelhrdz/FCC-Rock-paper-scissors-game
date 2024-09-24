// Getting variables
const rulesHeader = document.querySelector('.rulesHeader');
const rulesContainer = document.querySelector('.rulesContainer');
//Buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
//Scores
const optionsContainer = document.querySelector('.options');
const playerScore = document.querySelector('.playerScore');
const pcScore = document.querySelector('.pcScore');
//Winner
const winner = document.querySelector('.winner');
const playAgainButton = document.getElementById('playAgain');
const winSpan = document.getElementById('winSpan');


const dropdownToggle = () => {
    console.log('clicking');
    rulesContainer.classList.toggle('active');
}




//Generate computer move ----
const moves = ['rock', 'paper', 'scissors'];
let pcMove;

function pcRandomMove(){
     let index = Math.floor(Math.random() * 3);
    // console.log(index);
    pcMove = moves[index];
    console.log(pcMove);
}





//Player move ----
let playerMove;
button1.addEventListener('click', function(e){
    game(e);
})
button2.addEventListener('click', function(e){
    game(e);
})
button3.addEventListener('click', function(e){
    game(e);
})


let playerPoints = 0;
let pcPoints = 0;
playerScore.textContent = playerPoints;
pcScore.textContent = pcPoints;

function gameOver(){
    optionsContainer.classList.toggle('hide');
    winner.classList.toggle('hide');
    playAgainButton.onclick = playAgain;
}




function evaluateGame(player, pc){
    if(player === 'rock' && pc === 'scissors'){
        console.log('Player wins!');
        winSpan.innerText = 'Player wins!, rock beats scissors';
        playerPoints++;

        //rock
    } else if (pc === 'rock' && player === 'scissors'){
        console.log('PC wins!');
        winSpan.innerText = 'Pc wins!, rock beats scissors';
        pcPoints++;


        //scissors
    } else if(player === 'scissors' && pc === 'paper'){
        console.log('Player wins!');
        winSpan.innerText = 'Player wins!, scissors beats paper';
        playerPoints++;
    }  else if(pc === 'scissors' && player === 'paper'){
        console.log('PC wins!');
        winSpan.innerText = 'Pc wins!, scisors beats paper';
        pcPoints++;


        //paper
    } else if(player === 'paper' && pc === 'rock'){
        console.log('Player wins!');
        winSpan.innerText = 'Player wins!, paper beats rock';
        playerPoints++;
    } else if(pc === 'paper' && player === 'rock'){
        console.log('PC wins!');
        winSpan.innerText = 'Pc wins!, paper beats rock';
        pcPoints++;
    } else {
        winSpan.innerText = "It is a tie, both chosed same option";
    }

    playerScore.innerText = playerPoints;
    pcScore.innerText = pcPoints;

    if(playerPoints === 3 || pcPoints === 3){
        gameOver();
    }
}




//Game Logic ----
function game(chose){
    winSpan.innerText = '';
    playerMove = chose.target.innerText.toLowerCase();
    console.log(playerMove);
    pcRandomMove();
    evaluateGame(playerMove, pcMove);
}

function playAgain(){
    playerPoints = 0;
    pcPoints = 0;
    winSpan.innerText = '';

    playerScore.innerText = playerPoints;
    pcScore.innerText = pcPoints;

    optionsContainer.classList.toggle('hide');
    winner.classList.toggle('hide');
}



