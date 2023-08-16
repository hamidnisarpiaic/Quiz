"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// Define the questions
var questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is JavaScript primarily used for?',
        choices: ['Server-side scripting', 'Styling web pages', 'Creating interactive and dynamic web contentid', 'Compiling Typescript codelin'],
        correctAnswer: 'Creating interactive and dynamic web content',
    },
    {
        type: 'input',
        name: 'q2',
        message: 'What is 2 + 2?',
        validate: function (input) { return (input === '4' ? true : 'Incorrect answer!'); },
        correctAnswer: '4',
    },
    {
        type: 'list',
        name: 'q3',
        message: 'TypeScript is a superset of which programming language?',
        choices: ['Java', 'Python', 'C++', 'JavaScript', 'CSS'],
        correctAnswer: 'JavaScript',
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
        choices: ['2023', '2024', '2025', '2026'],
        correctAnswer: '2024',
    },
    {
        type: 'list',
        name: 'q8',
        message: 'When do we celebrate our Independence Day in Pakistan?',
        choices: ['14th August', '23rd March', '6th September', '25th December'],
        correctAnswer: '14th August',
    },
    {
        type: 'list',
        name: 'q9',
        message: 'Which command is used to initialize a new Node.js project and create a package.json file?',
        choices: ['npm init', 'npm i', 'node init', 'node init'],
        correctAnswer: 'npm init',
    },
    {
        type: 'list',
        name: 'q10',
        message: 'What is the purpose of the "package.json',
        choices: ['It contains the source code of the project', 'It defines the projectdependencies and configuration.', 'It stores the project documentation.', 'It is the entry point of the application.'],
        correctAnswer: 'It defines the project dependencies and configuration.',
    },
    // Add more questions here...
];
// Function to calculate the score
function calculateScore(userAnswers) {
    var score = 0;
    for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
        var question = questions_1[_i];
        var userAnswer = userAnswers[question.name];
        if (userAnswer === question.correctAnswer) {
            score++;
        }
    }
    return score;
}
// Main function to start the quiz
function startQuiz() {
    return __awaiter(this, void 0, void 0, function () {
        var userAnswers, _i, questions_2, question, answer, score, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    userAnswers = {};
                    _i = 0, questions_2 = questions;
                    _a.label = 1;
                case 1:
                    if (!(_i < questions_2.length)) return [3 /*break*/, 4];
                    question = questions_2[_i];
                    return [4 /*yield*/, inquirer_1.default.prompt([question])];
                case 2:
                    answer = _a.sent();
                    userAnswers[question.name] = answer[question.name];
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    score = calculateScore(userAnswers);
                    console.log("Your score: ".concat(score, " out of ").concat(questions.length));
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('An error occurred:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
startQuiz();
