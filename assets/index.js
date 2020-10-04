var start = document.getElementById("startBtn")
var score = document.getElementById("scoreDiv")
var timeLeft = document.getElementById("timeDiv")
var question = document.getElementById("questionDiv")
var answers = document.getElementById("answersDiv")
var questions = {
    one : "What is Javascript",
    two : "What does a function do",
    three : "What am I",
    four : "",
    five : ""
}

function startQuiz (){
    score.textContent = 0;
    timeLeft.textContent = 10;
    question.textContent = questions.one
    document.getElementById("quizDiv").removeAttribute("class")
    document.getElementById("openDiv").setAttribute("class", "hidden")

}





start.addEventListener("click", startQuiz)