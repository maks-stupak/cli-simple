import playGame from '../index.js';
import showGreeting from '../greeting.js';
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

const getQuestion = () => {
  const progression = getProgression();
  const indexOfEmpty = getRandomNum(0, progression.length);
  progression[indexOfEmpty] = '..';
  return progression.join(' ');
};

const getCorrectAnswer = (progressionString) => {
  const progression = progressionString.split(' ');
  const indexOfEmpty = progression.indexOf('..');
  let progressionDiff;

  if (indexOfEmpty < 2) {
    progressionDiff = progression[progression.length - 1] - progression[progression.length - 2];
  } else {
    progressionDiff = progression[1] - progression[0];
  }

  if (indexOfEmpty === 0) {
    return String(progression[1] - progressionDiff);
  }

  return String(parseInt(progression[0], 10) + progressionDiff * indexOfEmpty);
};

export default () => {
  const gameQuest = 'What number is missing in the progression?';
  const user = showGreeting(gameQuest);

  playGame(user, getQuestion, getCorrectAnswer);
};
