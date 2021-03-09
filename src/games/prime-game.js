import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const createGameRound = () => {
  const roundQuestion = getRandomNumber();
  const roundAnswer = isPrime(roundQuestion) ? 'yes' : 'no';

  return {
    question: roundQuestion,
    correctAnswer: roundAnswer,
  };
};

export default () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(gameRule, createGameRound);
};
