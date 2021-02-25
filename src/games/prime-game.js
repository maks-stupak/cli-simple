import playGame from '../index.js';
import showGreeting from '../greeting.js';
import getRandomNum from '../utils/random-num.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

export default () => {
  const gameQuest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const user = showGreeting(gameQuest);

  playGame(user, getRandomNum, getCorrectAnswer);
};
