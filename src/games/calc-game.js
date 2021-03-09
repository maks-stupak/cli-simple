import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperation = () => {
  const operations = ['-', '+', '*'];
  return operations[getRandomNumber(0, operations.length)];
};

const calc = (operation, operand1, operand2) => {
  let result;

  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error('Invalid operation');
  }

  return result;
};

const createGameRound = () => {
  const firstOperand = getRandomNumber(0, 10);
  const secondOperand = getRandomNumber(0, 10);
  const operation = getRandomOperation();

  const roundQuestion = `${firstOperand} ${operation} ${secondOperand}`;
  const roundAnswer = String(calc(operation, firstOperand, secondOperand));

  return {
    question: roundQuestion,
    correctAnswer: roundAnswer,
  };
};

export default () => {
  const gameRule = 'What is the result of the expression?';
  playGame(gameRule, createGameRound);
};
