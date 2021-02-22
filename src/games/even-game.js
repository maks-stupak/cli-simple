import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default (userName) => {
  playGame(userName, getRandomNum, isEven);
};
