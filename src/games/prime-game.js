import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

export default (userName) => {
  playGame(userName, getRandomNum, getCorrectAnswer);
};
