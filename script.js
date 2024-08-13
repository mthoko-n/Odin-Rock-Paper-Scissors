let humanScore = 0;
let compScore = 0;
let currentRound = 1;
const maxRounds = 5;

const roundResults = document.querySelectorAll('.round-results .result');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle = document.querySelector('.modal-title');
const modalMessage = document.querySelector('.modal-message');
const nextRoundButton = document.querySelector('.next-round-button');
const newGameButton = document.querySelector('.new-game-button');

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice){ 
    let roundWinner;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];

    if(!choices.includes(humanChoice)) {
        alert('Invalid choice. Please choose from: rock, paper, or scissors.');
        return;
    }


    if (humanChoice === computerChoice){
        roundWinner = 'Draw!';
    } else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        roundWinner = 'You win!';
    } else {
        compScore += 1;
        roundWinner = 'Computer wins!';
    }

    return roundWinner;
}



const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const compSelect = document.querySelector(".computer-selection");
const roundResult = document.querySelector(".round-result");

rockBtn.addEventListener("click", function(e) {
    const humanChoice = e.target.textContent;
    const compChoice = getComputerChoice();
    compSelect.textContent = compChoice;
    const result = playRound(humanChoice, compChoice);
    updateRoundResult(result);
    showModal(result);

});

paperBtn.addEventListener("click", function(e) {
    const humanChoice = e.target.textContent;
    const compChoice = getComputerChoice();
    compSelect.textContent = compChoice;
    const result = playRound(humanChoice, compChoice);
    updateRoundResult(result);
    showModal(result);
})

scissorsBtn.addEventListener("click", function(e) {
    const humanChoice = e.target.textContent;
    const compChoice = getComputerChoice();
    compSelect.textContent = compChoice;
    const result = playRound(humanChoice, compChoice);
    updateRoundResult(result);
    showModal(result);
    
})

function updateRoundResult(winner) {
    if (currentRound <= maxRounds) {
        roundResults[currentRound - 1].textContent = winner;
    }
}

function updateFinalWinner(){
    let finalWinner;
    if (humanScore > compScore) {
        finalWinner = "You win the game!";
    } else if (compScore > humanScore) {
        finalWinner = "Computer wins the game!";
    } else {
        finalWinner = "It's a draw!";
    }
    roundResults[maxRounds].textContent = finalWinner;
    return finalWinner;
}

function showModal(winner){
   
    if (currentRound >= maxRounds) {
        const finalW =updateFinalWinner();
        modalTitle.textContent = 'Final Winner';
        modalMessage.textContent = `Winner: ${finalW}`;
        nextRoundButton.classList.add('hidden');
        newGameButton.classList.remove('hidden');
    } else {
        modalTitle.textContent = `Round ${currentRound} Winner`;
        modalMessage.textContent = `Winner: ${winner}`;
        nextRoundButton.classList.remove('hidden');
        newGameButton.classList.add('hidden');
    }
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}

function hideModal(){
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}

nextRoundButton.addEventListener('click', function(){
    hideModal();
    currentRound++;
   
});

newGameButton.addEventListener('click', function(){
    hideModal();
    currentRound = 1;
    compSelect.textContent = "None";
    roundResults.forEach(result => result.textContent = '');
    humanScore = 0;
    compScore = 0;
    
});

