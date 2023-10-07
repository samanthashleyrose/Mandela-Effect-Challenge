// all required elements
const possibleAnswers = document.querySelectorAll('possible-answers button')


const questionEl = document.getElementById('question')
const imageEl = document.getElementById('image')
const choiceABtn = document.getElementById('choiceA')
const choiceBBtn = document.getElementById('choiceB')

// if Start Quiz button clicked then it will display the question box on top of it
document.getElementById('start-btn').addEventListener('click', function (){
    var startBox = document.getElementById('start-box')
    var questionBox = document.getElementById('question-box')

    if (startBox.style.display === 'none') {
        startBox.style.display = 'block';
        questionBox.style.display = 'none';
    } else {
        startBox.style.display = 'none';
        questionBox.style.display = 'block';
    }
});

// defines the values the question box will loop through 
let questions = [
    {
        question: "Which logo is correct?",
        image: "./assets/images/looney-toons.png",
        choices: ["Looney Toons", "Looney Tunes"],
        answer: "Looney Tunes"
    },
    {
        question: "Which logo is correct?",
        image: src="./assets/images/Jiffy",
        choiceA: "JIFFY",
        choiceB: "JIF",
        answer: "JIF"
    }
]

// Set the question text
questionEl.textContent = questions[0].question;

// Set the image, alt text, and width for the question
imageEl.src = questions[0].image;
imageEl.alt = "Looney Toons/Tunes Comparison"
imageEl.width = 800;

// Set answer choices on buttons
choiceABtn.textContent = questions[0].choices[0];
choiceBBtn.textContent = questions[0].choices[1];


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