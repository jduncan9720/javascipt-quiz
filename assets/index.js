var start = document.getElementById("startBtn");
var score = document.getElementById("scoreDiv");
var timeLeft = document.getElementById("timeDiv");
var question = document.getElementById("questionDiv");
var answer = document.getElementById("answersDiv");
var answerBtn1 = document.getElementById("aOne");
var answerBtn2 = document.getElementById("aTwo");
var answerBtn3 = document.getElementById("aThree");
var answerBtn4 = document.getElementById("aFour");
var finalScore = document.getElementById("final-score");
var submitBtn = document.querySelector(".sBtn");
var highscoreBtn = document.getElementById("highscoresbtn");
var userName = document.getElementById("userName");
var userScore = document.getElementById("userScore");
var highScoreDiv = document.getElementById("scoresDiv")
var answers = ["answer1", "answer3", "answer1", "answer2", "answer3"];
var clearScores = document.getElementById("clearBtn")
var restartBtn = document.getElementById("restartBtn")
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
        answer1: "if this works, I'll be surprised!",
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
var users = [];

//Global Variables Above//

start.addEventListener("click", startQuiz)
restartBtn.addEventListener("click", startQuiz)

function startQuiz() {
    currentScore = 0;
    currQuestion = 0;
    secondsLeft = 30;
    score.textContent = currentScore;
    timeLeft.textContent = secondsLeft;
    highScoreDiv.innerHTML = "";
    document.getElementById("quizDiv").removeAttribute("class")
    document.getElementById("openDiv").setAttribute("class", "hidden")
    document.getElementById("highScoresDiv").setAttribute("class", "hidden")
    document.getElementById("highScoreList").setAttribute("class", "hidden")
    countdown();
    makeQuestions(currQuestion);

    function countdown() {
        var downloadTimer = setInterval(function () {
            if (secondsLeft <= 0 || currQuestion > 4) {
                clearInterval(downloadTimer);
                endGame()
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
        document.getElementById("responseRight").removeAttribute("class");
        currentScore += 5;
        score.textContent = currentScore;
        setTimeout(() => {
            currQuestion++;
            makeQuestions(currQuestion);
        }, 1000);
    } else {
        document.getElementById("responseWrong").removeAttribute("class")
        score.textContent = currentScore;
        secondsLeft -= 5;
        setTimeout(() => {
            currQuestion++;
            makeQuestions(currQuestion);
        }, 1000);
    }
}

function endGame() {
    document.getElementById("quizDiv").setAttribute("class", "hidden")
    document.getElementById("highScoresDiv").removeAttribute("class")
    finalScore.textContent = currentScore;
};

answerBtn1.addEventListener("click", function () {
    answerCheck("answer1");
});
answerBtn2.addEventListener("click", function () {
    answerCheck("answer2");
});
answerBtn3.addEventListener("click", function () {
    answerCheck("answer3");
});
answerBtn4.addEventListener("click", function () {
    answerCheck("answer4");
});

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (JSON.parse(localStorage.getItem("users")) !== null) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    var input = document.querySelector(".inputName").value.trim();
    var user = {
        Name: input,
        Score: currentScore
    };
    users.push(user)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users));
    document.querySelector(".inputName").value = "";
    renderUsers()
});

function renderUsers() {
    for (let i = 0; i < users.length; i++) {
        var user = users[i];
        var newDiv = document.createElement("div");
        newDiv.textContent = user.Name + "    :    " + user.Score;
        newDiv.setAttribute("data-index", i)
        newDiv.setAttribute("class", "nameTxt")
        highScoreDiv.appendChild(newDiv)
    }
}

highscoreBtn.addEventListener("click", function () {
    document.getElementById("highScoresDiv").setAttribute("class", "hidden")
    document.getElementById("highScoreList").removeAttribute("class")
});

clearScores.addEventListener("click", function () {
    users = [];
    localStorage.setItem("users", JSON.stringify(users));
    highScoreDiv.innerHTML = ""
})


