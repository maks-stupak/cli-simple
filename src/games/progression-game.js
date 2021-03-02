import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const getProgression = () => {
  const firstNum = getRandomNum();
  const progressionLength = getRandomNum(5, 10);
  const diff = getRandomNum(1, 10);

  const progression = [firstNum];
  let currentNum = firstNum;

  for (let i = 0; i < progressionLength; i += 1) {
    currentNum += diff;
    progression.push(currentNum);
  }

  return progression;
};

const createGameRound = () => {
  const progression = getProgression();
  const indexOfEmpty = getRandomNum(0, progression.length);
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
