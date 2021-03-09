import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const createGameRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: String(gcd([firstNumber, secondNumber])),
  };
};

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  playGame(gameRule, createGameRound);
};
