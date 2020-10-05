var start = document.getElementById("startBtn");
var score = document.getElementById("scoreDiv");
var timeLeft = document.getElementById("timeDiv");
var question = document.getElementById("questionDiv");
var answer = document.getElementById("answersDiv");
var answerBtn1 = document.getElementById("aOne");
var answerBtn2 = document.getElementById("aTwo");
var answerBtn3 = document.getElementById("aThree");
var answerBtn4 = document.getElementById("aFour");
var answers = ["answer1", "answer3", "answer1", "answer2", "answer3"];
var questionsAns = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<script>",
        answer2: "<javascript>",
        answer3: "Isn't uranium an element?",
        answer4: "<js>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answer1: "msgBox('Hello World')",
        answer2: "Use a sharpie on a poster board.",
        answer3: "alert('Hello World')",
        answer4: "alertBox('Hello World')"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answer1: "myFunction()",
        answer2: "call function myFunction()",
        answer3: "call myFunction()",
        answer4: "Hey you stupid myfunction, get over here!"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer1: "if i = 5",
        answer2: "if (i == 5)",
        answer3: "if i == 5 then",
        answer4: "if i = 5 then"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answer1: "Math.rnd(7.25)",
        answer2: "md(7.25)",
        answer3: "Math.round(7.25)",
        answer4: "No one knows!"
    }];
var currQuestion = 0;
var secondsLeft = 60;
var currentScore = 0

//Global Variables Above//

start.addEventListener("click", startQuiz)

function startQuiz() {
    currQuestion = 0;
    score.textContent = currentScore;
    timeLeft.textContent = secondsLeft;
    document.getElementById("quizDiv").removeAttribute("class")
    document.getElementById("openDiv").setAttribute("class", "hidden")
    countdown();
    makeQuestions(currQuestion);

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

function makeQuestions(i) {
    document.getElementById("responseRight").setAttribute("class", "hidden")
    document.getElementById("responseWrong").setAttribute("class", "hidden")
    question.textContent = questionsAns[i].question
    answerBtn1.textContent = questionsAns[i].answer1
    answerBtn2.textContent = questionsAns[i].answer2
    answerBtn3.textContent = questionsAns[i].answer3
    answerBtn4.textContent = questionsAns[i].answer4
}

function answerCheck(button) {
    console.log(button);
    console.log(answers[currQuestion])

    if (button === answers[currQuestion]) {
        document.getElementById("responseRight").removeAttribute("class")
        currentScore++
        score.textContent = currentScore;
        setTimeout(() => {
            currQuestion++;
            makeQuestions(currQuestion);
        }, 2000);
    } else {
        document.getElementById("responseWrong").removeAttribute("class")
        score.textContent = currentScore;
        setTimeout(() => {
            currQuestion++;
            makeQuestions(currQuestion);
        }, 2000);
    }
}

answerBtn1.addEventListener("click", function(){
    answerCheck("answer1");
});
answerBtn2.addEventListener("click", function(){
    answerCheck("answer2");
});
answerBtn3.addEventListener("click", function(){
    answerCheck("answer3");
});
answerBtn4.addEventListener("click", function(){
    answerCheck("answer4");
});

// answer.addEventListener("click", function(event) {
//     var element = event.target;
//     // If that element is a button...
//     if (element.matches("button") === true) {
//       // Get its text
//       var curranswer = document.getElementById
//     }
//     console.log(curranswer)
// });