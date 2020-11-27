const quizData = [
    {
        question: 'Which country is the poorest in the world?',
        a: 'United Kingdom',
        b: 'China',
        c: 'Nigeria',
        d: 'Togo',
        correct: 'c'
    },
    {
        question: 'Who is the president of Nigeria?',
        a: 'Barack Obama',
        b: 'Muhammadu Buhari',
        c: 'Donald Trump',
        d: 'Aminu Sambo',
        correct: 'b'
    },
    {
        question: 'Who is the richest man in Nigeria?',
        a: 'Femi Otedola',
        b: 'Mike Adenuga',
        c: 'Abdulsamad Rabiu',
        d: 'Aliko Dangote',
        correct: 'd'
    },
    {
        question: 'Who is the CBN Governor?',
        a: 'Samson Nathan',
        b: 'Godwin Mafialoa',
        c: 'Godwin Emefiele',
        d: 'Godwin Emefiela',
        correct: 'c'
    },
    {
        question: 'What does APC stands for?',
        a: 'Animals Parading Corps',
        b: 'All Progressive Congress',
        c: 'Anti Peace Code',
        d: 'A New Chapter',
        correct: 'b'
    }
];

// DEFINE THE VARIABLES
const quizContainer = document.querySelector('.quiz-container');
const questionText = document.getElementById('question-text');
const UIanswers = document.querySelectorAll('.answer');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const btn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// LOAD QUIZ
loadQuiz();

// FUNCTION TO LOAD FIRST QUIZ
function loadQuiz() {
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionText.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
}

// SELECT ANSWER
function getSelected() {
    let answer = undefined;

    UIanswers.forEach((UIanswer) => {
        if (UIanswer.checked) {
            answer = UIanswer.id;
        }
    });

    return answer;
}

// DESELECT ANSWER
function deSelectAnswers() {
    UIanswers.forEach((UIanswer) => {
        UIanswer.checked = false;
    });
}

// LOAD THE NEXT QUIZ
btn.addEventListener('click', function () {
    // CHECK TO SEE ANSWER
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You score is ${score} / ${quizData.length}.</h2>`;
        }
    }
});