import playGame from '../index.js';
import showGreeting from '../greeting.js';
import getRandomNum from '../utils/random-num.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default () => {
  const gameQuest = 'Answer "yes" if the number is even, otherwise answer "no".';
  const user = showGreeting(gameQuest);

  playGame(user, getRandomNum, isEven);
};
