const questions = [
  {
    question: "What is the largest animal in the world?",
    answer: [
      { test: "Shark", correct: false },
      { test: "Blue whale", correct: true },
      { test: "Elephant", correct: false },
      { test: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answer: [
      { test: "Vatican city", correct: true },
      { test: "Bhutan", correct: false },
      { test: "Nipal", correct: false },
      { test: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "What is the capital of Norway?",
    answer: [
      { test: "Pakistan", correct: false },
      { test: "Birgin", correct: false },
      { test: "Oslo", correct: true },
      { test: "Tromso", correct: false },
    ],
  },
  {
    question: "What is the smallest continent in the world?",
    answer: [
      { test: "Asia", correct: false },
      { test: "Australia", correct: true },
      { test: "Arctic", correct: false },
      { test: "Africa", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { test: "Venus", correct: false },
      { test: "Mars", correct: true },
      { test: "Jupiter", correct: false },
      { test: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: [
      { test: "K2", correct: false },
      { test: "Kilimanjaro", correct: false },
      { test: "Mount Everest", correct: true },
      { test: "Denali", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answer: [
      { test: "Atlantic Ocean", correct: false },
      { test: "Indian Ocean", correct: false },
      { test: "Arctic Ocean", correct: false },
      { test: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "How many continents are there in the world?",
    answer: [
      { test: "5", correct: false },
      { test: "6", correct: false },
      { test: "7", correct: true },
      { test: "8", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answer: [
      { test: "Amazon River", correct: false },
      { test: "Nile River", correct: true },
      { test: "Mississippi River", correct: false },
      { test: "Yangtze River", correct: false },
    ],
  },
  {
    question: "Which country has the largest population?",
    answer: [
      { test: "India", correct: true },
      { test: "China", correct: false },
      { test: "United States", correct: false },
      { test: "Indonesia", correct: false },
    ],
  },
];

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers-button");
const nextBtnEl = document.getElementById("button-next");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtnEl.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionEl.innerHTML = currentQuestion.question;
  currentQuestion.answer.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.test;
    button.classList.add("btn");
    answerEl.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtnEl.style.display = "none";
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";
  }

  Array.from(answerEl.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green";
    }
    button.disabled = true;
  });
  nextBtnEl.style.display = "block";
}
function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtnEl.innerHTML = "Play Again";
  nextBtnEl.style.display = "block";
}

nextBtnEl.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  } else {
    startQuiz();
  }
});
startQuiz();
