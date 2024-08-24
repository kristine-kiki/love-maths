//wait for the DOM to finish loading before running the game
//get the button elements and add event listiners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * the main game "loop", called when thr script is first loaded
 * and after the user`s answer was been processed
 */
function runGame() {

    //creates two random numebers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 +1);
    let num2 = Math.floor(Math.random() * 25 +1);
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}