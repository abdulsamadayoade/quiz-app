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
        c: 'b'
    }
];

// DEFINE THE VARIABLES
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');

// DEFINE THE VARIABLE FOR THE CURRENT QUESTION
let currentQuiz = 0;

// LOAD QUIZ
loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionText.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;

    currentQuiz++;
}