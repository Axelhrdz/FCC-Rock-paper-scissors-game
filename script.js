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
const winner = document.getElementById('winner');

const dropdownToggle = () => {
    console.log('clicking');
    rulesContainer.classList.toggle('active');
}



//Generate computer move
const moves = ['rock', 'paper', 'scissors'];
let index;
let pcMove;
function pcRandomMove(){
    index = Math.floor(Math.random() * 3);
    console.log(index);
    pcMove = moves[index];
    console.log(pcMove);
}





//Player move
function choosingBtnOne(){
    console.log('boton1');
}


let playerMove;


button1.addEventListener('click', function(e){
    playerMove = e.target.innerText.toLowerCase();
    console.log(playerMove);
    pcRandomMove();
    game();
})
button2.addEventListener('click', function(e){
    playerMove = e.target.innerText.toLowerCase();
    console.log(playerMove);
    pcRandomMove();
    game();
})
button3.addEventListener('click', function(e){
    playerMove = e.target.innerText.toLowerCase();
    console.log(playerMove);
    pcRandomMove();
    game();
})


let playerPoints = 0;
let pcPoints = 0;
playerScore.textContent = playerPoints;
pcScore.textContent = pcPoints;
//Game Logic
function game(){
    
    if(playerMove === pcMove){
        console.log('EMPATE');

        //rock
    } else if(playerMove === 'rock' && pcMove === 'scissors'){
        console.log('Player Wins!')
        playerPoints++;
        getWinner();

    } else if(pcMove === 'rock' && playerMove === 'scissors') {
        console.log('PC Wins!')
        pcPoints++;
        getWinner();

        //scissors
    } else if(playerMove === 'scissors' && pcMove === 'paper') {
        console.log('Player Wins!') 
        playerPoints++;
    } else if(pcMove === 'scissors' && playerMove === 'paper') {
        console.log('PC Wins!')
        pcPoints++;
        getWinner();

        //paper
    } else if(playerMove === 'paper' && pcMove === 'rock'){
        console.log('Player Wins!')
        playerPoints++;
    } else if(pcMove === 'paper' && playerMove === 'rock'){
        console.log('PC Wins!')
        pcPoints++;
    }
    playerScore.textContent = playerPoints;
    pcScore.textContent = pcPoints;

    // getWinner();
}

function getWinner(){
    if(playerPoints===3){
        console.log('Player has Won!');
        winner.textContent = 'Player has won!'
        optionsContainer.style.display = 'none';
    } else if (pcPoints===3){
        console.log('PC has won!');
        winner.textContent = 'PC has won!'
        optionsContainer.style.display = 'none';
    }
}



