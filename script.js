// all required elements

let currentQuestionIndex = 0;
const questionEl = document.getElementById('question')
const imageEl = document.getElementById('image')
const choiceABtn = document.getElementById('choiceA')
const choiceBBtn = document.getElementById('choiceB')

// if Start Quiz button clicked then it will display the question box on top of it
document.getElementById('start-btn').addEventListener('click', function (){
    var startBox = document.getElementById('start-box')
    var questionBox = document.getElementById('question-box')

    if (questionBox.style.display === 'none') {
        startBox.style.display = 'block';
        questionBox.style.display = 'none';
    } else {
        startBox.style.display = 'none';
        questionBox.style.display = 'block';
    }
});

// defines the values the question box will loop through 
const questions = [
    {
        question: "Which logo is correct?",
        image: "./assets/images/looney-toons.png",
        imageAlt: "Looney Toons/Tunes Comparison",
        choices: ["Looney Toons", "Looney Tunes"],
        answer: "Looney Tunes",
        wrongAnswer: "Looney Toons"
        
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/jiffy.png",
        imageAlt: "JIF Comparison",
        choices: ["JIFFY","JIF"],
        answer: "JIF",
        wrongAnswer: "JIFFY"
    }
]

// Define the event listener for answer buttons outside of any functions
const possibleAnswers = document.querySelectorAll('#possible-answers button');
possibleAnswers.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
});


// Create a function to handle answer button clicks and advance to the next question

function handleAnswerClick(click) {
    const selectedAnswer = click.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer || selectedAnswer === currentQuestion.wrongAnswer) {
        // User selected the correct answer
        currentQuestionIndex++; // Move to the next question

        if (currentQuestionIndex < questions.length) {
            // If there are more questions, display the next question
            displayCurrentQuestion();
        } else {
            // If there are no more questions
            console.log("Quiz completed!");
        }
}}


// Create a function to display the current question
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;
    imageEl.src = currentQuestion.image;
    choiceABtn.textContent = currentQuestion.choices[0];
    choiceBBtn.textContent = currentQuestion.choices[1];
}
displayCurrentQuestion();


// connect to h3 timer in HTML
var timerEL = document.getElementById('timer');

// timer that counts down from 60 (seconds)
function timerCountdown (duration) {

    var timeLeft = duration, minutes, seconds;
    setInterval(function() {
        // Minutes are number of current total seconds divided by 60 (seconds in a minute).
        minutes = parseInt(timeLeft / 60, 10);
        // Seconds are calculated as the module 60 of the current total seconds counter.
        seconds = parseInt(timeLeft % 60, 10);

        // condition to test ? value if true : value if false
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerEL.textContent = minutes + ":" + seconds;
        
        if (--timeLeft < 0) {
            timerEL.textContent = duration;
        }
        }, 1000);
    };

// display timer on window = 90 second countdown 
window.onload = function () {
    var ninetySeconds = 60 * 1.5,
        display = document.querySelector('#timer');
        timerCountdown(ninetySeconds, display);
    };