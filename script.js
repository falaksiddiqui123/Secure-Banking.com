// DARK MODE 

 const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = darkModeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// MOBILE MENU 

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// QUIZ 

const questions = [

    {
        question: "Should you share your OTP with someone claiming to be a bank employee?",

        answers: [
            {
                text: "Yes",
                correct: false
            },

            {
                text: "No",
                correct: true
            }
        ]
    },


    {
        question: "What should you do before clicking a banking link received by SMS?",

        answers: [
            {
                text: "Click immediately",
                correct: false
            },

            {
                text: "Verify the link through an official source",
                correct: true
            },

            {
                text: "Forward it to friends",
                correct: false
            }
        ]
    },


    {
        question: "Which is safer for accessing online banking?",

        answers: [
            {
                text: "An unofficial banking app",
                correct: false
            },

            {
                text: "A trusted official banking app",
                correct: true
            },

            {
                text: "A random website",
                correct: false
            }
        ]
    },


    {
        question: "What makes a password safer?",

        answers: [
            {
                text: "Using your name",
                correct: false
            },

            {
                text: "Using a unique and strong password",
                correct: true
            },

            {
                text: "Using 123456",
                correct: false
            }
        ]
    },


    {
        question: "What should you do if you suspect a fraudulent transaction?",

        answers: [
            {
                text: "Ignore it",
                correct: false
            },

            {
                text: "Contact your bank through an official channel",
                correct: true
            },

            {
                text: "Share your OTP with the caller",
                correct: false
            }
        ]
    }

];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

const quizContainer = document.getElementById("quiz-container");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");


function startQuiz() {

    currentQuestion = 0;
    score = 0;

    quizContainer.style.display = "block";
    resultElement.style.display = "none";

    showQuestion();

}


function showQuestion() {

    resetAnswers();

    let question = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}. ${question.question}`;

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.classList.add("answer-btn");

        if (answer.correct) {

            button.dataset.correct = "true";

        }

        button.addEventListener("click", selectAnswer);

        answersElement.appendChild(button);

    });

}


function resetAnswers() {

    nextBtn.style.display = "none";

    while (answersElement.firstChild) {

        answersElement.removeChild(
            answersElement.firstChild
        );

    }

}


function selectAnswer(event) {

    const selectedButton = event.target;

    const isCorrect =
        selectedButton.dataset.correct === "true";

    if (isCorrect) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("wrong");

    }


    Array.from(answersElement.children).forEach(button => {

        if (button.dataset.correct === "true") {

            button.classList.add("correct");

        }

        button.disabled = true;

    });


    nextBtn.style.display = "inline-block";

}


nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    quizContainer.style.display = "none";

    resultElement.style.display = "block";

    scoreElement.textContent =
        `You scored ${score} out of ${questions.length}.`;

}


function restartQuiz() {

    startQuiz();

}


startQuiz();