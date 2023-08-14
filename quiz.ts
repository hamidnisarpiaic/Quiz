import inquirer from "inquirer";

// Define the questions
const questions = [
  {
    type: 'list',
    name: 'q1',
    message: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Madrid', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    type: 'input',
    name: 'q2',
    message: 'What is 2 + 2?',
    validate: (input: string) => (input === '4' ? true : 'Incorrect answer!'),
    correctAnswer: '4',
  },
  {
    type: 'list',
    name: 'q3',
    message: 'What is the capital of Pakistan?',
    choices: ['Islamabad', 'Lahore', 'Karachi', 'Quetta', 'Peshawar'],
    correctAnswer: 'Islamabad',
  },
  {
    type: 'list',
    name: 'q4',
    message: 'Who is the founder of Pakistan?',
    choices: ['Allama Iqbal', 'Quaid-e-Azam Mohammad Ali Jinnah', 'Liaquat Ali Khan'],
    correctAnswer: 'Quaid-e-Azam Mohammad Ali Jinnah',
  },
  {
    type: 'list',
    name: 'q5',
    message: 'What is the largest planet in our solar system?',
    choices: ['Jupiter', 'Mars', 'Venus', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    type: 'list',
    name: 'q6',
    message: 'Who is the current Prime Minister of Pakistan?',
    choices: ['Imran Khan', 'Shahbaz Sharif', 'Anwar-ul-Haq Kakar', 'Nawaz Sharif'],
    correctAnswer: 'Anwar-ul-Haq Kakar',
  },
  {
    type: 'list',
    name: 'q7',
    message: 'When are the next Elections in Pakistan expected to be held?',
    choices: ['2023', '2024', '2025', 'I don\'t know'],
    correctAnswer: '2024',
  },
  {
    type: 'list',
    name: 'q8',
    message: 'When do we celebrate our Independence Day in Pakistan?',
    choices: ['14th August', '23rd March', '6th September', '25th December'],
    correctAnswer: '14th August',
  },
  // Add more questions here...
];

// Function to calculate the score
function calculateScore(userAnswers: Record<string, string>): number {
  let score = 0;

  for (const question of questions) {
    const userAnswer = userAnswers[question.name];
    if (userAnswer === question.correctAnswer) {
      score++;
    }
  }

  return score;
}

// Main function to start the quiz
async function startQuiz() {
  try {
    const userAnswers: Record<string, string> = {}; // Store answers
    for (const question of questions) {
      const answer = await inquirer.prompt([question]);
      userAnswers[question.name] = answer[question.name];
    }

    const score = calculateScore(userAnswers);

    console.log(`Your score: ${score} out of ${questions.length}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

startQuiz();
