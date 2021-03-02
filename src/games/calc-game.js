import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const getRandomOperation = () => {
  const operations = ['-', '+', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calc = (num1, operation, num2) => {
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

const createGameRound = () => {
  const firstOperand = getRandomNum(0, 10);
  const secondOperand = getRandomNum(0, 10);
  const operation = getRandomOperation();

  const roundQuestion = `${firstOperand} ${operation} ${secondOperand}`;
  const roundAnswer = String(calc(firstOperand, operation, secondOperand));

  return {
    question: roundQuestion,
    correctAnswer: roundAnswer,
  };
};

export default () => {
  const gameRule = 'What is the result of the expression?';
  playGame(gameRule, createGameRound);
};
