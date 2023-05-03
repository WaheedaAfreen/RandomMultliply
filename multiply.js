const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const form = document.getElementById("form");

let score = 0;
let num1, num2; // Declare num1 and num2 globally

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    questionEl.innerText =`What is ${num1} multiplied by ${num2}?` ;
}
function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
        alert("Correct!");
    } else {
        score--;
        alert("Incorrect. Try again.");
    }
    scoreEl.innerText =` Score: ${score}`;
    generateQuestion();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswer = parseInt(document.getElementById("input").value);
    const correctAnswer = num1 * num2;
    const isCorrect = userAnswer === correctAnswer;
    updateScore(isCorrect);
});

// Initial question generation
generateQuestion();
