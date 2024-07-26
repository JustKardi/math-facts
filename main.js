let realAnswer;
let score = 0;
let isRunning = false;
let elapsedTime = 0;
let timerInterval;
let questionCount = 0;
let mute = false;
let jsConfetti;

document.addEventListener('DOMContentLoaded', () => {
    const muteButton = document.getElementById('mute');
    const timerElement = document.getElementById('timer');
    const resetButton = document.getElementById('reset');
    const correct = document.getElementById('correct-sound');
    const wrong = document.getElementById('wrong-sound');
    const finishButton = document.getElementById('finish');

    if (typeof JSConfetti !== 'undefined') {
        jsConfetti = new JSConfetti();
    } else {
        console.error('JSConfetti is not defined');
    }

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
            if (!mute) {
                correct.play();
            }
            questionCount++;
            if (score % 10 == 0) {
                if (jsConfetti) {
                    jsConfetti.addConfetti({
                        emojis: ['🌈', '💗', '🥳', '🍫', '🎁', '🍜', '🌸', '⭐', '⭐'],
                    });
                }
            }
        } else {
            if (!mute) {
                wrong.play();
            }
            questionCount++;
        }

        numOne.textContent = getRandomNumber();
        numTwo.textContent = getRandomNumber();
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('answer').value = ''; // Clear the input field
    }

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(() => {
                elapsedTime++;
                updateTimer();
            }, 1000);
        }
    }

    function stopStopwatch() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetStopwatch() {
        stopStopwatch();
        elapsedTime = 0;
        updateTimer();
    }

    function updateTimer() {
        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;

        let formattedTime = 
            String(hours).padStart(2, '0') + ':' + 
            String(minutes).padStart(2, '0') + ':' + 
            String(seconds).padStart(2, '0');

        timerElement.textContent = `Time: ${formattedTime}`;
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            if (!isRunning) {
                startStopwatch();
            } else {
                stopStopwatch();
            }
        } else if (event.code === 'Enter') {
            addition();
        }
    });

    resetButton.addEventListener('click', () => {
        score = 0;
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('numberOne').textContent = getRandomNumber();
        document.getElementById('numberTwo').textContent = getRandomNumber();
        document.getElementById('answer').value = ''; // Clear the input field
        resetStopwatch();
    });

    function finish() {
        // Save values to localStorage
        localStorage.setItem('score', score);
        localStorage.setItem('elapsedTime', elapsedTime);
        localStorage.setItem('questionCount', questionCount);
        
        console.log('Finish button clicked');
        window.location.href = 'finish-page.html';
    }

    finishButton.addEventListener('click', finish);

    muteButton.addEventListener('click', () => {
        mute = !mute;
        muteButton.textContent = mute ? 'Unmute' : 'Mute';
        correct.muted = mute;
        wrong.muted = mute;
    });
});
