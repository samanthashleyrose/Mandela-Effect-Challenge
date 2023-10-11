// All required elements
let currentQuestionIndex = 0;
const questionEl = document.getElementById('question')
const imageEl = document.getElementById('image')
const choiceABtn = document.getElementById('choiceA')
const choiceBBtn = document.getElementById('choiceB')

let startBox = document.getElementById('start-box')
let questionBox = document.getElementById('question-box')
let scoreboard = document.getElementById('results-box')

var totalTime = 60 * 1.5;
var timeLeft = totalTime

// If Start Quiz button is clicked then it will display the question box on top of it
document.getElementById('start-btn').addEventListener('click', function (){
    console.log('Start Button Clicked!');

    display = document.querySelector('#timer');
    timerCountdown();

    if (questionBox.style.display === 'none') {
        startBox.style.display = 'block';
        questionBox.style.display = 'none';
    } else {
        startBox.style.display = 'none';
        questionBox.style.display = 'block';
        console.log("Timer countdown has begun")
    }
});

// Defines the values the question box will loop through 
const questions = [
    {
        question: "Which logo is correct?",
        image: "./assets/images/looney-toons.png",
        imageAlt: "Looney Toons/Tunes Comparison",
        choices: ["Looney Toons", "Looney Tunes"],
        answer: "Looney Tunes"
        
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/jiffy.png",
        imageAlt: "JIF Comparison",
        choices: ["JIFFY","JIF"],
        answer: "JIF"
    },
    {
        question: "Does Curious George have a tail?",
        image: "./assets/images/curious-george.png",
        imageAlt: "Curious George Comparison",
        choices: ["He does not have a tail","He has a tail"],
        answer: "He does not have a tail"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/skechers.png",
        imageAlt: "Skechers Comparison",
        choices: ["Sketchers","Skechers"],
        answer: "Skechers"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/flintstones.png",
        imageAlt: "Flintstones Comparison",
        choices: ["Flinstones","Flintstones"],
        answer: "Flintstones"
    },
    {
        question: "Does the Monopoly Man have a Monocle?",
        image: "./assets/images/monopoly-man.png",
        imageAlt: "Monopoly Man Comparison",
        choices: ["He does not have a monocle","He has a monocle"],
        answer: "He does not have a monocle"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/berenstain-bears.png",
        imageAlt: "Berenstain Bears Comparison",
        choices: ["Berenstein","Berenstain"],
        answer: "Berenstain"
    },
    {
        question: "Does C-3PO have a silver leg?",
        image: "./assets/images/c3po.png",
        imageAlt: "C3PO Comparison",
        choices: ["He has a silver leg","He does not have a silver leg"],
        answer: "He has a silver leg"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/kitkat.png",
        imageAlt: "KitKat Comparison",
        choices: ["Kit-Kat","KitKat"],
        answer: "KitKat"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/sex-and-the-city.png",
        imageAlt: "Sex and the City Comparison",
        choices: ["Sex in the City","Sex and the City"],
        answer: "Sex and the City"
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/fotl.png",
        imageAlt: "Fruit of the Loom Comparison",
        choices: ["It has a Cornucopia","It does not have a Cornucopia"],
        answer: "It does not have a Cornucopia"
    }
]

// Defines the event listener for answer buttons
const possibleAnswers = document.querySelectorAll('#possible-answers button');
possibleAnswers.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
});


// Function that will handle the answer button clicks and advance to the next question
function handleAnswerClick(click) {
    const selectedAnswer = click.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

        // condition checking if answer is wrong, then reduce the time by 15 secs
        if(selectedAnswer !== currentQuestion.answer){
            timeLeft -= 10;
        }
        currentQuestionIndex++; // Move to the next question
        console.log("User Selected: " + selectedAnswer + ". The correct answer is " + currentQuestion.answer);

        if (currentQuestionIndex < questions.length) {
            // If there are more questions, display the next question
            displayCurrentQuestion();
        } else {
            // If there are no more questions
            startBox.style.display = 'none';
            questionBox.style.display = 'none';
            scoreboard.style.display = 'block';
            console.log("Quiz completed!");
        }
}


// Function that will display the current question
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;
    imageEl.src = currentQuestion.image;
    choiceABtn.textContent = currentQuestion.choices[0];
    choiceBBtn.textContent = currentQuestion.choices[1];
}
displayCurrentQuestion();

// Connects to h3 timer in HTML
var timerEL = document.getElementById('timer');

// Timer that counts down from 90 (seconds)
function timerCountdown () {

    var duration, minutes, seconds;

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
            timerEL.textContent = duration; // Duration keeps timer from going negative
        }
    }, 1000);
};


document.getElementById('results-submit').addEventListener('click', function(){
    console.log('Submit Results Button Clicked!');
})