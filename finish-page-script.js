// finish-page-script.js
const timeScore = document.getElementById('timeScore');
const correctScore = document.getElementById('correctScore');
const totalScore = document.getElementById('totalScore');

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve values from localStorage
    const storedScore = localStorage.getItem('score') || 0;
    const storedElapsedTime = localStorage.getItem('elapsedTime') || 0;
    const storedQuestionCount = localStorage.getItem('questionCount') || 0;
    
    // Update UI with retrieved values
    timeScore.innerHTML = `Time: ${storedElapsedTime}`;
    correctScore.innerHTML = `Questions Correct: ${storedScore}`;
    totalScore.innerHTML = `Total Questions: ${storedQuestionCount}`;
});
