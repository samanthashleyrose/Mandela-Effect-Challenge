
// all required elements
const startBtn = document.querySelector('#startBtn')


// f Start Quiz button clicked
startBtn.onclick = () => (
    questionBox.classList.add("activeQuestions") // show the question box
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
