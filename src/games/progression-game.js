import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = () => {
  const firstNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 10);
  const diff = getRandomNumber(1, 10);

  const progression = [];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstNumber + (i - 1) * diff);
  }

  return progression;
};

const createGameRound = () => {
  const progression = getProgression();
  const indexOfEmpty = getRandomNumber(0, progression.length);
  const roundAnswer = progression[indexOfEmpty];
  progression[indexOfEmpty] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: String(roundAnswer),
  };
};

const gameRule = 'What number is missing in the progression?';

export default () => {
  playGame(gameRule, createGameRound);
};
