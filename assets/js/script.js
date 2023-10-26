var timeEl = document.querySelector(".time");
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");


var secondsLeft = 75;

var mode = "start";

// Listen for a click event on toggle switch
const myButton = document.querySelector('button');
myButton.addEventListener("click", function() {

  if (mode === "start") {
    
    mode = "test";
    container.setAttribute("class", "test");
    setTime();
    myButton.style.visibility = 'hidden';
  }

});
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      mode = "end";
      container.setAttribute("class", "end");
    }

  }, 1000);
}