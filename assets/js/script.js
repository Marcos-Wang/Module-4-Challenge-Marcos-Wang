var timeEl = document.querySelector(".time");
var container = document.querySelector(".container");
var myFinalScore = document.querySelector(".finalScore");

var secondsLeft = 15;

var mode = "start";

timeEl.textContent = "15 Seconds";

const myTest = document.querySelector('.testBox');

const scoreBox = document.querySelector('.scoreBox');

scoreBox.style.display = 'none';

myTest.style.display = 'none';

//test starter

const myButton = document.querySelector('button');

var saveButton = document.querySelector('#save');

myButton.addEventListener("click", function () {

  if (mode === "start") {

    mode = "test";
    container.setAttribute("class", "test");
    setTime();
    myButton.style.display = 'none';
    myTest.style.display = 'flex';
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
    myTest.style.display = 'none';
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
      myTest.style.display = 'none';
      scoreBox.style.display = 'flex';
      timeEl.textContent = "";
      myFinalScore.textContent = score;
    }

  }, 1000);


  //Final Score Box:


  // saveButton.addEventListener("click", function (event) {
  
    
  // event.preventDefault();

  // var highScore = {
  //   myName : document.getElementById("user-name"),
  //   thisScore: score
  // }

  // localStorage.setItem("highScore", JSON.stringify(highScore));

  // document.getElementById("user-name").style.display = "none";
  // document.getElementById("save").style.display = "none";
  // document.getElementById("willSave").style.display = "none";
  // myFinalScore.textContent = "Saved!";
  
  // });
  // let savedNameForm = localStorage.getItem('highScore');
  // document.querySelector(".mySavedScores").textContent = "Name: " + highScore.myName + "Score: " + highScore.thisScore;

  

  // width: 400px;
  //   height: 200px;
}