var start = document.getElementById("startBtn")
var score = document.getElementById("scoreDiv")
var timeLeft = document.getElementById("timeDiv")
var question = document.getElementById("questionDiv")
var answer = document.getElementById("answersDiv")
var questions = { one: "What is Javascript", two: "What does a function do", three: "What am I", four: "", five: "" }
var answersOne = [];
var answersTwo = [];
var answersThree = [];
var answersFour = [];
var answersFive = [];
var secondsLeft = 10



function startQuiz() {
    score.textContent = 0;
    timeLeft.textContent = secondsLeft;
    question.textContent = questions.one
    document.getElementById("quizDiv").removeAttribute("class")
    document.getElementById("openDiv").setAttribute("class", "hidden")
    countdown()

    function countdown() {
        var downloadTimer = setInterval(function () {
            if (secondsLeft <= 0) {
                clearInterval(downloadTimer);
                alert("time's up")
            }
            timeLeft.textContent = secondsLeft--;
            console.log(secondsLeft)
        }, 1000);
    }
}


start.addEventListener("click", startQuiz)