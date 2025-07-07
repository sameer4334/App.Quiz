const quizData = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Multan"],
    correct: 1
  },
  {
    question: "What is the biggest city in Pakistan?",
    options: ["Lahore", "Islamabad", "Karachi", "Multan"],
    correct: 2
  },
  {
    question: "Which language is our National language?",
    options: ["Urdu", "Punjabi", "Pashto", "Sindhi"],
    correct: 0
  },
  {
    question: "Which is known by city of Lights?",
    options: ["Islamabad", "Lahore", "Peshawar", "Karachi"],
    correct: 3
  },
  {
    question: "How many Ports in Karachi?",
    options: ["2", "3", "1", "4"],
    correct: 0
  },
  {
    question: "How many majour importants languages people speaks in Pakistan?",
    options: ["5", "9", "4", "6"],
    correct: 2
  },
  {
    question: "How many peoples leave in Karachi?",
    options: ["2CR", "2.5CR", "3CR", "2.8CR"],
    correct: 1
  },
  {
    question: "How many weathers we have in Pakistan?",
    options: ["3", "4", "5", "2"],
    correct: 1
  }
]; 

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.backgroundColor = 'black'; // Reset color
    btn.disabled = false;
  });
}

function selectAnswer(selectedIndex) {
  const q = quizData[currentQuestion];
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) {
      btn.style.backgroundColor = 'green';
    } 
    if (index === selectedIndex && selectedIndex !== q.correct) {
      btn.style.backgroundColor = 'red';
    }
  });

  if (selectedIndex === q.correct) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector('.quiz-container').innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>
    `;
  }
}

loadQuestion();
