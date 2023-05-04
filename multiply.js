
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");

let score = 0;
let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) ;
    num2 = Math.floor(Math.random() * 10) ;
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

    scoreEl.innerText =`Score: ${score}`;
    generateQuestion();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();


        if (isNumberValid(input.value)) {
            event.preventDefault();
            alert("valid number.");
        }

        if (!isNumberValid(input.value)) {
            event.preventDefault();
            alert("Invalid number  Please enter a valid number.");
        }

        const userAnswer = parseInt(document.getElementById("input").value);
        const correctAnswer = num1 * num2;
        const isCorrect = userAnswer === correctAnswer;
        updateScore(isCorrect);
        form.reset();


        function isNumberValid(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        }

    });

    generateQuestion();







