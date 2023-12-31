// GLOBAL VARIABLES //

let startBox = document.getElementById('start-box');

let questionBox = document.getElementById('question-box');
let currentQuestionIndex = 0;
const questionEl = document.getElementById('question');
const imageEl = document.getElementById('image');
const choiceABtn = document.getElementById('choiceA');
const choiceBBtn = document.getElementById('choiceB');
const feedbackMessage = document.getElementById('feedback-message');
const timerEL = document.getElementById('timer');
let totalTime = 60 * 2;
let timeLeft = totalTime;

let score = 0;
let resultsBox = document.getElementById('results-box');
const endGameMessage = document.getElementById('end-game-message');
const playersList = document.getElementById('players-list');

// START QUIZ SECTION //

// If Start Quiz button is clicked then it will display the question box
document.getElementById('start-btn').addEventListener('click', function (){
    console.log('Start Button Clicked!');

    timerCountdown(); // Starts timer

    if (questionBox.style.display === 'none') {
        startBox.style.display = 'block';
        questionBox.style.display = 'none';
    } else {
        startBox.style.display = 'none';
        timerEL.style.display = 'block';
        questionBox.style.display = 'block';
        console.log('Timer countdown has begun');
    }
});


// ACTIVE QUESTIONS SECTION //

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
        image: "./assets/images/jiffy-copy.png",
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
    },
    {
        question: "Which logo is correct?",
        image: "./assets/images/cheez-it.png",
        imageAlt: "CHEEZ-IT Comparison",
        choices: ["CHEEZ-ITZ","CHEEZ-IT"],
        answer: "CHEEZ-IT"
    }
]

// Defines the event listener for answer buttons
const possibleAnswers = document.querySelectorAll('#possible-answers button');
possibleAnswers.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
});

// Function that will display the current question
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;
    imageEl.src = currentQuestion.image;
    imageEl.alt = currentQuestion.imageAlt;
    choiceABtn.textContent = currentQuestion.choices[0];
    choiceBBtn.textContent = currentQuestion.choices[1];
}
displayCurrentQuestion();

// Timer that counts down from 120 (seconds), displays as 2:00
function timerCountdown () {

    var minutes, seconds;

    const beginTimer = setInterval(function() {
        // Minutes are number of current total seconds divided by 60
        minutes = parseInt(timeLeft / 60, 10);
        // Seconds are calculated as the module 60 of the current total seconds counter.
        seconds = parseInt(timeLeft % 60, 10);

        //   condition to test ? value if true : value if false
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerEL.textContent = minutes + ':' + seconds;
        
        if (--timeLeft < 0 && currentQuestionIndex < questions.length) {
            clearInterval(beginTimer); // Stop the timer
            timerEL.textContent = '00:00'
            gameCompleted(); // Ends the quiz
            endGameMessage.textContent = 'Game Over ☹';
            console.log('Game Over!');
        } else {
            timeLeft--;
        }
    }, 1000);
};

// Function that will handle the answer button clicks, will increment the score for correct answers, and will advance to the next question
function handleAnswerClick(click) {
    const selectedAnswer = click.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        feedbackMessage.textContent = 'Correct! ﹢1 point';
        feedbackMessage.style.color = 'rgb(28, 115, 20)';
    } else {
        setTimeout(() => {
        timerEL.textContent = '-10 seconds!!!';
        });
        timeLeft -= 10;
        feedbackMessage.textContent = 'Incorrect! ☹';
        feedbackMessage.style.color = 'rgb(187, 11, 11)';
        console.log('-10 seconds!!!');
    }

    // Remove the feedback message after a 1 second delay
    setTimeout(() => {
        feedbackMessage.textContent = '';
    }, 1000);

    currentQuestionIndex++;
    console.log('User Selected: ' + selectedAnswer + '. The correct answer is ' + currentQuestion.answer);
  
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            displayCurrentQuestion(); // Pauses for 1 second before moving to next question
        }, 1000);
    } else { // If no questions left
        gameCompleted();
        endGameMessage.textContent = 'Game Completed ☺';
    }
}

// SCORE AND RESULTS SECTION //

// Function to display results box and current players score
function gameCompleted() {
    startBox.style.display = 'none';
    questionBox.style.display = 'none';
    resultsBox.style.display = 'block';
    document.getElementById('score').textContent = score; // Display the player's score
    console.log('Game Completed!');
}

// Defines the event listener for the form submission
document.getElementById('results-form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Submit Results Button Clicked!');

  // Gets the player's initials
  let initials = document.getElementById('initials').value;

  // Gets the current (formatted) date and time to display
  const currentDate = new Date();
  const dateOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

  let formattedDateTime = `${formattedDate} ${formattedTime}`;

  // Creates a list item to display the player's information
  const playersInfo = document.createElement('li');
  playersInfo.textContent = `${initials} - Scored ${score} points on ${formattedDateTime}`; // How submitted information will be displayed under Player History

  // Adds the player's information to the players list
  playersList.appendChild(playersInfo);

  // Saves the player's information to local storage
  saveResultToLocalStorage(initials, score, formattedDateTime);

  // Clears the initials input field
  document.getElementById('initials').value = '';
});

// Function that will save the player's information to local storage
function saveResultToLocalStorage(initials, score, formattedDateTime) {
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];
    results.push({ initials, score, formattedDateTime });
    localStorage.setItem('quizResults', JSON.stringify(results));
}

// Function that will display saved results in local storage
function displaySavedResults() {
    const savedResults = JSON.parse(localStorage.getItem('quizResults')) || [];

    savedResults.forEach((result) => {
        const playersInfo = document.createElement('li');
        playersInfo.textContent = `${result.initials} - Scored ${result.score} points on ${result.formattedDateTime}`; // How past saved player's information will be displayed
        playersList.appendChild(playersInfo);
  });
}
displaySavedResults();

// If Play Again button is clicked then it will reload the page
document.getElementById('play-again-btn').addEventListener('click', function (){
    location.reload();
});