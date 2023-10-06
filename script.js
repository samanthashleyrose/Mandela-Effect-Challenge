
// all required elements
const startBox = document.querySelector('.startbox');
const startBtn = document.querySelector('.startBtn');
const questionBox1 = document.querySelector('.question-box1');
const questionBox2 = document.querySelector('.question-box2');
let choiceA = document.querySelector('.correct-answer')
let choiceB = document.querySelector('.correct-answer')
let choiceC = document.querySelector('.correct-answer')
let choiceD = document.querySelector('.correct-answer')



// if Start Quiz button clicked then...
startBtn.onclick = () => (
    questionBox1.classList.add("activeQuestions") // then show the question box 1
);


// if First Question is answered then...
choiceA.onclick = () => (
    questionBox2.classList.add("activeQuestions") // then show the question box 2
)

// connect to h3 timer in HTML
var timerEL = document.getElementById('#timer');


// timer that counts down from 60 (seconds)
function timerCountdown (duration, display) {

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










