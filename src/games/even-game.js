import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createGameRound = () => {
  const roundQuestion = getRandomNum();

  return {
    question: roundQuestion,
    correctAnswer: isEven(roundQuestion),
  };
};

export default () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(gameRule, createGameRound);
};
