import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
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

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  playGame(gameRule, createGameRound);
};
