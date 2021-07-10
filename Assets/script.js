//Global Variable Bank

var timer;
var timerCount = 100;
var timerElement = document.getElementById("RunningTimer");
var score = 0

// Buttons

var gameButton = document.getElementById('GameButton')
var hsButton = document.getElementById('ScoresBttn')
var stButton = document.getElementById('StartGame')

// Questions and Answers
var questionEl = document.getElementById('Question')
var answersEl = document.getElementById('Answers')
var gameOverEl = document.getElementById('GameOver')

var shuffledQuestions, currentQuestionIndex;

var scoreEl = document.getElementById('RunningScore')
scoreEl.textContent = score;

// Game Timer Function (Starts at 100 Seconds)
function startTimer() {
    // Sets timer
    timerCount = 100;
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
  
      // Clear Interval when Timer hits 0, or less than 0 and makes timer 0
      if (timerCount === 0 || timerCount < 0) {
        // Clears interval
        clearInterval(timer);
        timerCount = 0;
        timerElement.textContent = timerCount;
        endGame();
      }
    }, 1000);
  }

// Function to reset score counter

  function renderScore() {
        scoreEl.textContent = score;
     }

// Function to clear score on game reset

  function clearScore() {
      score = 0;
  }
// Starting the Game & Timer

 stButton.addEventListener('click', stGame)
 stButton.addEventListener('click', startTimer)
 gameButton.addEventListener('click', () =>{
     currentQuestionIndex++
         // Call the next question in array
     setNextQuestion()
 })
 
 
     // Function to start the game, hide the play button, then show the question & choices also start timer.
 function stGame() {

    clearScore();
     // Hide play button
     stButton.classList.add('hide');
     // Shuffle questions & Randomizes array
     shuffledQuestions = questionBank.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     // Removes "hide" class to reveal quiz
     questionEl.classList.remove('hide')
     answersEl.classList.remove('hide')

     gameOverEl.classList.add('hide')
     setNextQuestion()
 }
 
 function setNextQuestion() {
             // Clears old questions and answers and resets it
     resetState()
             // Shows next question & resets Score*
     showQuestion(shuffledQuestions[currentQuestionIndex])
     renderScore()
 }
 
 function showQuestion(question) {
     questionEl.innerText = question.question
     question.answers.forEach(answers =>{
         const button = document.createElement('button')
         button.innerText = answers.text
         button.classList.add('btn')
         if (answers.correct == true) {
             button.setAttribute("Correct", true);
         } else {
            button.setAttribute("Correct", false);
         }
         button.addEventListener('click', selectAnswer)
         answersEl.appendChild(button)
     })
 }
 
 function resetState() {
     // Hides next button after answering previous question
   gameButton.classList.add('hide')
     // Clears old answer choices 
   while (answersEl.firstChild) {
       answersEl.removeChild
       (answersEl.firstChild)
   }
 }
 
 
//  function selectAnswer(e) {
//      const selectedButton = e.target
//      const correct = selectedButton.dataset.correct

function selectAnswer(e) {
    const selectedButton = e.target

    // Solution for converting checkerStat from "striing" to boolean || Realize now I could've also fixed if statement to = "true" instead of true
    var checkerStat = JSON.parse(selectedButton.getAttribute("Correct"));
    
     function updateScore() {
    // Come Back to later; Trying to figure out how to keep score per question and update high score*
     if (checkerStat === true) {
         score += 100;
         renderScore();

         // Timer removes 20 seconds on ever button press of wrong answer instead of just once. (So does correct answer; wrap in funciton)
     } else {
         timerCount -= 20}
     }
     
     updateScore ();

     // Restarts game if on last array index
     if(shuffledQuestions.length > currentQuestionIndex +1){
         gameButton.classList.remove('hide')

     }else {
        endGame();
     }

 }
 
 // Function to "End the Game," Bring up name input field and add High Score to localStorage

 function endGame () {
    console.log("The Game Has Now Ended.");

    stButton.innerText = 'Restart'
    stButton.classList.remove('hide')
    stButton.addEventListener('click', stGame)
    stButton.addEventListener('click', startTimer)

    gameOverEl.classList.remove('hide')

    answersEl.classList.add("hide")
    questionEl.classList.add("hide")

    gameButton.classList.add('hide');

 }
 
 hsButton.addEventListener('click', function() {
     console.log("Checking Your High Score are ye? Come back later to link to Local Storage")
 })

















  // array of questions
var questionBank = [
    {
        question: 'Commonly used data types DO NOT Include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false},
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within____.',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'paranthesis', correct: true},
            {text: 'square brackets', correct: false},
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true},
        ]
    },
    {
        question: 'String values must be enclosed within ______ when  being assigned to variables.',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false},
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: true},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true},
        ]
    }];

    