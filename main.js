let realAnswer;
let score = 0;
const resetButton = document.getElementById('reset');

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function addition() {
    let numOne = document.getElementById('numberOne');
    let numTwo = document.getElementById('numberTwo');
    let inputAnswer = parseInt(document.getElementById('answer').value);

    let numberOneValue = parseInt(numOne.textContent);
    let numberTwoValue = parseInt(numTwo.textContent);

    realAnswer = numberOneValue + numberTwoValue;

    if (inputAnswer === realAnswer) {
        score++;
    } else {
        score--;
    }

    numOne.textContent = getRandomNumber();
    numTwo.textContent = getRandomNumber();
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('answer').value = ''; // Clear the input field
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addition();
    }
});

resetButton.addEventListener('click', () => {
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('numberOne').textContent = getRandomNumber();
    document.getElementById('numberTwo').textContent = getRandomNumber();
    document.getElementById('answer').value = ''; // Clear the input field
})