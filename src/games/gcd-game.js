import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const getGcdFor2Num = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcdFor2Num(num2, num1 % num2);
};

const getGsd = (nums) => {
  let factor = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    factor = getGcdFor2Num(factor, nums[i]);
  }
  return factor;
};

const createGameRound = () => {
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 20);

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: String(getGsd([firstNumber, secondNumber])),
  };
};

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  playGame(gameRule, createGameRound);
};
