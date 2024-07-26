// finish-page-script.js
const timeScore = document.getElementById('timeScore');
const correctScore = document.getElementById('correctScore');
const totalScore = document.getElementById('totalScore');

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve values from localStorage
    const storedScore = localStorage.getItem('score') || 0;
    const storedElapsedTime = localStorage.getItem('elapsedTime') || 0;
    const storedQuestionCount = localStorage.getItem('questionCount') || 0;

    let hours = Math.floor(storedElapsedTime/ 3600);
    let minutes = Math.floor((storedElapsedTime % 3600) / 60);
    let seconds = storedElapsedTime % 60;

    let formattedTime = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');
    
    // Update UI with retrieved values
    timeScore.innerHTML = `Time: ${formattedTime}`;
    correctScore.innerHTML = `Questions Correct: ${storedScore}`;
    totalScore.innerHTML = `Total Questions: ${storedQuestionCount}`;
});
