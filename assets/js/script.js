var timeEl = document.querySelector(".time");
var container = document.querySelector(".container");


var secondsLeft = 15;

var mode = "start";

timeEl.textContent = "15 Seconds";

const myTest = document.querySelector('.testBox');

myTest.style.visibility = 'hidden';

//test starter

const myButton = document.querySelector('button');

myButton.addEventListener("click", function () {

  if (mode === "start") {

    mode = "test";
    container.setAttribute("class", "test");
    setTime();
    myButton.style.visibility = 'hidden';
    myTest.style.visibility = 'visible';
  }

});

//test questions and scoring

var questionNum = 0;
var score = 0;
const myAnswer1 = document.querySelector(".answer1");
const myAnswer2 = document.querySelector('.answer2');
const myAnswer3 = document.querySelector('.answer3');
const myQuestion = document.querySelector('.question');

const questions = ["How can you make a numbered list?", "What is the correct HTML for making a checkbox?", "What does HTML stand for?", "Choose the correct HTML tag for the largest heading", "What is the correct HTML tag for inserting a line break?", ""];
myQuestion.textContent = questions[questionNum];

const answers1 = ["<list>", "<input type='checkbox'>", "Hyperlinks and Text Markup Language", "<header>", "<br>"];
myAnswer1.textContent = answers1[questionNum];

const answers2 = ["<ul>", "<checkbox>", "Hyper Text Markup Language", "<h6>", "<lb>"];
myAnswer2.textContent = answers2[questionNum];

const answers3 = ["<ol>", "<check>", "Home Tool Markup Language", "<h1>", "\\n"];
myAnswer3.textContent = answers3[questionNum];

const answers = [3, 1, 2, 3, 1, 3]

const myScore = document.querySelector('.currentScore');
myScore.textContent = "Current Score: " + score;

function update(correct) {

  questionNum++;
  myQuestion.textContent = questions[questionNum];
  myAnswer1.textContent = answers1[questionNum];
  myAnswer2.textContent = answers2[questionNum];
  myAnswer3.textContent = answers3[questionNum];
  if (correct) {
    myScore.textContent = "Correct! \n Current Score: " + score;
  } else {
    myScore.textContent = "Incorrect! \n Current Score: " + score;
  }
  if (questionNum == 5) {
    container.setAttribute("class", "end");
    myTest.style.visibility = 'hidden';
    secondsLeft = 0;
  }

};

myAnswer1.addEventListener("click", function () {

  if (answers[questionNum] == 1) {
    score++;
    update(true);
  } else {
    update(false);
  }

});
myAnswer2.addEventListener("click", function () {

  if (answers[questionNum] == 2) {
    score++;
    update(true);
  } else {
    update(false);
  }

});
myAnswer3.addEventListener("click", function () {

  if (answers[questionNum] == 3) {
    score++;
    update(true);
  } else {
    update(false);
  }

});





//test timer

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      mode = "end";
      container.setAttribute("class", "end");
      myTest.style.visibility = 'hidden';
      timeEl.textContent = "";
    }

  }, 1000);


  //Final Score Box:


  // width: 400px;
  //   height: 200px;
}