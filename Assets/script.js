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

var shuffledQuestions, currentQuestionIndex;

var scoreEl = document.getElementById('RunningScore')
scoreEl.textContent = score;

// Game Timer Function (Starts at 100 Seconds)
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
  
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }

// Function to reset score counter

  function renderScore() {
        scoreEl.textContent = score;
     }

// Starting the Game & Timer

 stButton.addEventListener('click', stGame)
 stButton.addEventListener('click', startTimer)
 gameButton.addEventListener('click', () =>{
     currentQuestionIndex++
         // call the next question
     setNextQuestion()
 })
 
 
     // function to start the game, hide the play button, then show the question & choices also start timer.
 function stGame() {
     // hides play button after pressing
     stButton.classList.add('hide');
     // set a way to shuffle questions. randomizes array
     shuffledQuestions = questionBank.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     // reveal questions
     questionEl.classList.remove('hide')
     answersEl.classList.remove('hide')

     setNextQuestion()
 }
 
 function setNextQuestion() {
             // clears old and resets it
     resetState()
             // shows new question
     showQuestion(shuffledQuestions[currentQuestionIndex])
     renderScore()
 }
 
 function showQuestion(question) {
     questionEl.innerText = question.question
     question.answers.forEach(answer =>{
         const button = document.createElement('button')
         button.innerText = answer.text
         button.classList.add('btn')
         if (answer.correct) {
             button.dataset.correct = answer.correct
         }
         button.addEventListener('click', selectAnswer)
         answersEl.appendChild(button)
     })
 }
 
 function resetState() {
     // hide next button after answering
   gameButton.classList.add('hide')
     // clearing old blank choices 
   while (answersEl.firstChild) {
       answersEl.removeChild
       (answersEl.firstChild)
   }
 }
 
 
 function selectAnswer(e) {
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     
 
     // If on the last question restart
     if(shuffledQuestions.length > currentQuestionIndex +1){
         gameButton.classList.remove('hide')
     }else {
         stButton.innerText = 'Restart'
         stButton.classList.remove('hide')
 
     }
 
 
     // keep up with the current score
     if(questionBank.correct===true){
         score =+ 100;
         renderScore();

 
     }
     
 
     // reveals next button
     gameButton.classList.remove('hide')
 }
 
 
 
 hsButton.addEventListener('click', function() {
     console.log("Checking Your High Score are ye?")
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