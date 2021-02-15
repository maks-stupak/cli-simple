import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const getRandomOperation = () => {
  const operations = ['-', '+', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calc = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }

  return result;
};

const createQuestion = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operation = getRandomOperation();

  console.log(`Question: ${num1} ${operation} ${num2}`);
  return [num1, num2, operation];
};

const getCorrectAnswer = (question) => {
  const correctAnswer = calc(question[0], question[1], question[2]);
  return `${correctAnswer}`;
};

export default (userName) => {
  playGame(userName, createQuestion, getCorrectAnswer);
};
