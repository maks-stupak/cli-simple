import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operations = ['-', '+', '*'];
const getRandomOperation = () => operations[getRandomNumber(0, operations.length)];

const calc = (operation, operand1, operand2) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Invalid operation');
  }
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

const gameRule = 'What is the result of the expression?';

export default () => {
  playGame(gameRule, createGameRound);
};
