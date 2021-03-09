import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const createGameRound = () => {
  const roundQuestion = getRandomNumber();

  return {
    question: roundQuestion,
    correctAnswer: isEven(roundQuestion) ? 'yes' : 'no',
  };
};

export default () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(gameRule, createGameRound);
};
